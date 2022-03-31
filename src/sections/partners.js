import { Box, Container, Heading, Image } from 'theme-ui';
import ccfp from '../assets/images/partners/coca-cola-foundation.png';
import sps from '../assets/images/partners/save-phil-seas.png';
import walausik from '../assets/images/partners/wala-usik.png';
import vilgro from '../assets/images/partners/vilgro.png';
import plaf from '../assets/images/partners/the-plaf.png';
import wimla from '../assets/images/featured/when-in-manila.png';
import mlastd from '../assets/images/featured/manila-standard.jpg';
import inquirer from '../assets/images/featured/inquirer.jpg';
import gmanews from '../assets/images/featured/gma-news.png';
import tripzilla from '../assets/images/featured/tripzilla.jpg';
import mb from '../assets/images/featured/manila-bulletin.jpg';
import reportr from '../assets/images/featured/reportr.png';
import cosmo from '../assets/images/featured/cosmo-ph.png'
import { ComponentType, TriggerAnalytics } from 'analytics/trigger'

const Partners = () => {
  return (
    <TriggerAnalytics name="Partners" component={ComponentType.SECTION}>
      <Box id="partners" as="section" variant="section.partners" sx={styles.partners}>
        <Container>
          <Heading sx={styles.heading}>
            Powered by
          </Heading>
          <Box as="div" sx={styles.logos}>
            <Box as="div" sx={styles.partnerLogo}>
              <Image src={walausik} width={110} layout={'fixed'} sx={styles.logoImg}/><br/>
            </Box>
            <Box as="div" sx={styles.partnerLogo}>
              <Image src={sps} width={280} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            <Box as="div" sx={styles.partnerLogo}>
              <Image src={ccfp} width={280} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            <Box as="div" sx={styles.partnerLogo}>
              <Image src={vilgro} width={240} layout={'fixed'} sx={styles.logoImg}/><br/>
            </Box>
          </Box>
          <Heading sx={styles.heading}>
            In Partnership with
          </Heading>
          <Box as="div" sx={styles.logos}>
            <Box as="div" sx={styles.partnerLogo}>
              <Image src={plaf} width={110} layout={'fixed'} sx={styles.logoImg}/><br/>
            </Box>
          </Box>
          <Heading sx={styles.heading}>
            Featured by
          </Heading>
          <Box as="div" sx={styles.featuredLogos}>
            <a href="https://www.wheninmanila.com/this-local-org-repurposes-the-packaging-of-your-online-shopping-haul/" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={wimla} width={75} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://manilastandard.net/lifestyle/wellness-environment/358322/where-to-donate-plastic-packaging-from-online-shopping.html" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={mlastd} width={150} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://newsinfo.inquirer.net/1439254/covid-19s-plastic-waste-pandemic-opens-door-to-startups" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={inquirer} width={170} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://www.dailymotion.com/video/x81kf0v" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={gmanews} width={100} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://www.tripzilla.ph/juanbag-metro-manila/26609" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={tripzilla} width={140} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://mb.com.ph/2021/04/21/got-plastic-bags-and-bubble-wrap-juanbag-will-pick-them-up-to-recycle/" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={mb} width={130} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://www.reportr.world/news/brand-makes-reusable-bags-out-of-old-plastic-packaging-for-free-a4713-20210528" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={reportr} width={120} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
            <a href="https://www.cosmo.ph/lifestyle/reusable-bag-plastic-packaging-juanbag-a1213-20210529" target="_blank">
              <Box as="div" sx={styles.partnerLogo}>
                <Image src={cosmo} width={120} layout={'fixed'} sx={styles.logoImg}/><br/>
              </Box>
            </a>
          </Box>
        </Container>
      </Box>
    </TriggerAnalytics>
  )
}

export default Partners

const styles = {
  partners: {
    paddingTop: '4em',
    paddingBottom: '4em',
  },
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 120],
  },
  heading: {
    marginBottom: [30, 30, 30, 30],
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logos: {
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(4, 1fr)',
    marginBottom: '4em'
  },
  partnerLogo: {
    margin: [15, 15, 15, 15],
    textAlign: 'center',
    marginBottom: '2em',
    marginTop: '2em'
  },
  featuredLogos: {
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(8, 1fr)',
  },
  logoImg: {
    filter: 'grayscale(100%)',
  }
}