import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import 'components/modal/modal.css'
import 'typeface-dm-sans'
import 'typeface-poppins'
import ReactGA from 'react-ga4'

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter()
  const [isInitialized, setInitializeState] = useState(false)

  useEffect(() => {

    ReactGA.initialize([
      { trackingId: process.env.NEXT_PUBLIC_GA_ID }
    ])
    const handleRouteChangeEvent = (url) => {
      ReactGA.send({ hitType: "pageview", page: url })
      setInitializeState(true)
    }

    router.events.on('routeChangeComplete', handleRouteChangeEvent)
    return () => {
      router.events.off('rteChangeComplete', handleRouteChangeEvent)
    }
  }, [router.events])

  if (isInitialized)
    ReactGA.send({ hitType: "pageview", page: router.asPath })

  return <Component {...pageProps} />
}
