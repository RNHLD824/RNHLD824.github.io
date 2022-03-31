import ScrollTrigger from 'react-scroll-trigger'
import ReactGA from 'react-ga4'
import { cloneElement, useState } from 'react'

export const ComponentType = Object.freeze({
	BUTTON: "COMPONENT_TYPE_BUTTON",
	SECTION: "COMPONENT_TYPE_SECTION",
})

const MS_DELAY_BUTTON_TO_GA_TRIGGER = 3000
const OOS_ENUM_CONDITION = component => `Invocation Issue: please respect the enum ('ComponentType') declared from 'scroll.js'. Got '${component}' instead`
const PROGRESS_ON_ENTER_OFFSET_SECTION = 0.20
const PROGRESS_ON_EXIT_OFFSET_SECTION = 0.80
const REFRESH_ANALYTICS_TRIGGER_TIME = 1000

const eventProperties = { // * Declare this as a blueprint for the ReactGA.event({ }).
	category: null,
	label: null,
	action: null,
	nonInteraction: false
}

let debugLog = (debugMode, message) => {
	if (debugMode)
		console.info(message)
}

let hitGA = (debugMode, name, loadedProperties) => {
	ReactGA.event(loadedProperties)
	if (debugMode) {
		debugLog(debugMode, `Event | GA event hit @ ${name}. | Payload: ${JSON.stringify(loadedProperties)}`)
	}
}

let loadEventProperties = (components) => {
	let parentComponents = { ...components }

	if (parentComponents.component == ComponentType.BUTTON) {
		eventProperties["category"] = "button_trigger_scroll"
		eventProperties["label"] = `${ComponentType.BUTTON.toLowerCase()}_${parentComponents.name.toLowerCase()}`
		eventProperties["action"] = `Clicked ${parentComponents.name} button.`

		if (parentComponents.progressOffset > PROGRESS_ON_ENTER_OFFSET_SECTION) {
			console.warn(`At component: ${parentComponents.name} | The component is declared as ${parentComponents.component}, one of the parameters ['progressOffset'] with a context [${parentComponents.progressOffset}] will be ignored here.`)
		}
		return eventProperties
	}
	else if (parentComponents.component == ComponentType.SECTION) {
		eventProperties["category"] = "section_trigger_scroll"
		eventProperties["label"] = `${ComponentType.SECTION.toLowerCase()}_${parentComponents.name.toLowerCase()}`
		eventProperties["action"] = `Looked at ${parentComponents.name} section.`
		eventProperties["nonInteraction"] = true

		if (parentComponents.msDelayButtonToRenable != MS_DELAY_BUTTON_TO_GA_TRIGGER) {
			console.warn(`At component: ${parentComponents.name} | The component is declared as ${parentComponents.component}, one of the parameters ['msDelayButtonToRenable'] with a context [${parentComponents.msDelayButtonToRenable}] will be ignored here.`)
		}
		return eventProperties
	}
	else {
		throw new Error(OOS_ENUM_CONDITION(parentComponents.component))
	}
}

export const TriggerAnalytics = ({ children, name, component, msDelayButtonToRenable = MS_DELAY_BUTTON_TO_GA_TRIGGER, shouldDebugComponent = false, onEnterProgressOffset = PROGRESS_ON_ENTER_OFFSET_SECTION, onExitProgressOffset = PROGRESS_ON_EXIT_OFFSET_SECTION }) => {
	const [wasClicked, setClicked] = useState(false) // * Use for the button only.
	const [wasSectionHitOnScroll, setSectionHitOnScroll] = useState(false) // * Used and triggered whenever a section was hit by onOpen(). It sets out-of-scope to false and this hook in particular.
	const [wasOutOfScope, setOutOfScope] = useState(false) // * Used and triggered whenever the section was out of reach, triggered by onExit(). It sets out-of-scope to true, as well as, section-hit and was inside (for progress) to false.
	const [wasInsideSection, setWasInsideSection] = useState(false) // * Used and triggered whenever the user attempted to scroll and waited on the section, thurs triggering onProgress().
	const [wasRunning, setAsRunning] = useState(false) // * Used for safe-guarding the setTimeout() inside of onProgress() This prohibits other call stack to proceed further from the setTimeout(). For this to work properly, we need to downscale the time it takes for the setTimeout() and as well as the throttle declaration on `ScrollTrigger` component.

	// * Resolve the event properties through conditions. I cannot do it in one-liner for the sake of readability of the code.
	let eventPayload = loadEventProperties({ component, msDelayButtonToRenable, name, onEnterProgressOffset })

	// * Default trigger actions on the particular component. Replaceable if functions are not overriden by supplying the parameters 'onEnter, onProgress, and onExit'.
	let onEnter = () => {
		if (component === ComponentType.BUTTON) {
			if (!wasClicked) {
				hitGA(shouldDebugComponent, name, eventPayload)
				setClicked(true)
				setTimeout(() => {
					setClicked(false)

					debugLog(shouldDebugComponent, `Clicks-to-GA cooldown were done after ${msDelayButtonToRenable / 1000} second/s.`)
				}, msDelayButtonToRenable)
			}
			else {
				debugLog(shouldDebugComponent, `This ${name} (button) was already clicked. Will not trigger GA events. Wait for ${msDelayButtonToRenable / 1000} second/s.`)
			}
		}
		else if (component === ComponentType.SECTION) {
			if (!wasSectionHitOnScroll) {
				setSectionHitOnScroll(true)
				setOutOfScope(false)

				debugLog(shouldDebugComponent, `Scroll (onEnter) @ ${name} | Hit on Enter. | Out-of-Scope: ${wasOutOfScope}, Section Hit on Scroll: ${wasSectionHitOnScroll}`)
			}
		}
		else {
			throw new Error(OOS_ENUM_CONDITION(component))
		}
	}

	let onProgress = ({ progress }) => {
		debugLog(shouldDebugComponent, `Scroll (onProgress) @ ${name} | Progress: ${progress} (hit on ${onEnterProgressOffset} and ${onExitProgressOffset}), Section Hit: ${wasSectionHitOnScroll}, Out-of-Scope: ${wasOutOfScope}, Stayed: ${wasInsideSection}`)

		if (!wasRunning) {
			setTimeout(() => {
				setAsRunning(true)

				if (wasSectionHitOnScroll && !wasOutOfScope && !wasInsideSection && progress >= onEnterProgressOffset && progress <= onExitProgressOffset) {
					setWasInsideSection(true)
					hitGA(shouldDebugComponent, name, eventPayload)
					debugLog(shouldDebugComponent, `Scroll (onProgress) @ ${name} | Stayed inside the section.`)

				} else if (wasSectionHitOnScroll && wasOutOfScope && !wasInsideSection && onEnterProgressOffset <= progress) {
					debugLog(shouldDebugComponent, `Scroll (onProgress) => Forced to 'defaultOnExit.'`)
					defaultOnExit()
				}

				setAsRunning(false)
				debugLog(shouldDebugComponent, `Scroll (onProgress) @ ${name} | Observe time was expired ...`)
			}, REFRESH_ANALYTICS_TRIGGER_TIME - 200) // ! Requires downscling to prohibit other call stack to proceed with the same last state.

		} else {
			debugLog(shouldDebugComponent, `Scroll (onProgress) @ ${name} | Was already running ...`)
		}
	}

	let onExit = () => {
		setWasInsideSection(false)
		setSectionHitOnScroll(false)
		setOutOfScope(true)
		debugLog(shouldDebugComponent, `Scroll (onExit) @ ${name} | Hit on Exit. | Section Hit: ${wasSectionHitOnScroll}, Out-of-Scope: ${wasOutOfScope}, Stayed: ${wasInsideSection}`)
	}

	if (component === ComponentType.SECTION) {
		return (<ScrollTrigger throttleScroll={REFRESH_ANALYTICS_TRIGGER_TIME / 2} throttleResize={REFRESH_ANALYTICS_TRIGGER_TIME} onEnter={onEnter} onProgress={onProgress} onExit={onExit}>
			{children}
		</ScrollTrigger>
		)
	} else { // We know that this condition was also evaluated on the top of code, considering other case is not needed.
		return cloneElement(children, { onClick: onEnter })
	}
}
