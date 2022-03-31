/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text, Image } from 'theme-ui';
import step1 from '../assets/images/solution/step1.png';
import step2 from '../assets/images/solution/step2.png';
import step3 from '../assets/images/solution/step3.png';
import { ComponentType, TriggerAnalytics } from 'analytics/trigger';

const Solution = () => {
  return (
    <TriggerAnalytics name="Solution" component={ComponentType.SECTION}>
      <Box id="solution" as="section" variant="section.solution" sx={styles.solution}>
        <Container>
          <Heading sx={styles.heading}>Our Solution</Heading>
          <Container sx={styles.stepsBox}>
            <Box sx={styles.stepBox}>
              <Box sx={styles.imgHolder}>
                <Image src={step1} layout='fill' objectFit='contain'/>
              </Box>
              <Box sx={styles.rightContent}>
                <Heading sx={styles.stepHeading}>
                  Choose
                </Heading>
                <Text as='p' sx={styles.description}>
                  <Text as='p' sx={ styles.subheading }><Text as='span' sx={styles.stepHighlight}>Choose</Text> our JuanBag packaging when you order online.</Text>
                  <p>
                    We partner with brands where you pay an additional fee to choose our reuseable and returnable packaging upon check out.
                  </p>
                </Text>
              </Box>
            </Box>
            <Box sx={styles.stepBoxReverse}>
              <Box sx={styles.leftContent}>
                <Heading sx={styles.stepHeading}>
                  Scan
                </Heading>
                <Text as='p' sx={styles.description}>
                  <Text as='p' sx={ styles.subheading }><Text as='span' sx={styles.stepHighlight}>Scan</Text> our JuanBag to see how you can return it using our JuanLoop app. </Text>
                  <p>
                    Our JuanBag is equipped with QR code where you can find our drop-off points or schedule a pick-up collection.
                  </p>
                </Text>
              </Box>
              <Box sx={styles.imgHolder}>
                <Image src={step2} layout='fill' objectFit='contain'/>
              </Box>
            </Box>
            <Box sx={styles.stepBox}>
              <Box sx={styles.imgHolder}>
                <Image src={step3} layout='fill' objectFit='contain'/>
              </Box>
              <Box sx={styles.rightContent}>
                <Heading sx={styles.stepHeading}>
                  Return
                </Heading>
                <Text as='p' sx={styles.description}>
                  <Text as='p' sx={ styles.subheading }>Once <Text as='span' sx={styles.stepHighlight}>returned</Text>, you will get exciting rewards and rebate. JuanBag will then be sanitized and reused.</Text>
                  <p>
                    Earn rebates and points to avail discounts or use them in contributing to our impact initiatives.
                  </p>
                </Text>
              </Box>
            </Box>
          </Container>
        </Container>
      </Box>
    </TriggerAnalytics>
  )
}

export default Solution

const styles = {
  solution: {
    paddingTop: '4em',
    paddingBottom: '4em',
    '@media screen and (max-device-width: 768px) ': {
      paddingBottom: '1em',
    },
  },
  heading: {
    textAlign: 'center',
    color: 'heading',
    fontWeight: 500,
    fontSize: ['24px', '30px'],
    lineHeight: [1.25, 1.5],
    letterSpacing: 'heading',
    marginBottom: '2em',
    justifyContent: 'center',
    '@media screen and (max-device-width: 768px) ': {
      marginBottom: '0em',
    },
  },
  subheading: {
    fontWeight: 'bold'
  },
  stepHeading: {
    marginBottom: '1em',
    textAlign: 'left',
    fontWeight: 'bold',
    '@media screen and (max-device-width: 768px) ': {
      textAlign: 'center',
    },
  },
  description: {
    lineHeight: '1.6',
    textAlign: 'justify'
  },
  stepsBox: {
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(2, 1fr)',
    width: '100%',
  },
  stepBox: {
    height: '100%',
    gap: [30, 30, 30, 30, 40, 60, 70, 30],
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    marginTop: '0',
    marginBottom: '1em',
    '@media screen and (max-device-width: 768px) ': {
      marginTop: '2em',
      marginBottom: '2em',
    },
  },
  stepBoxReverse: {
    height: '100%',
    gap: [30, 30, 30, 30, 40, 60, 70, 30],
    display: 'flex',
    flexFlow: 'wrap-reverse',
    alignItems: 'center',
    marginTop: '0',
    marginBottom: '1em',
  },
  imgHolder: {
    width: '50%',
    '@media screen and (max-device-width: 768px) ': {
      width: '100%'
    },
  },
  rightContent: {
    flex: 1,
  },
  leftContent: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  stepHighlight: {
    color: 'primary',
    fontWeight: 'bold'
  }
}