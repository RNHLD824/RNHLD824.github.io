/** @jsxImportSource theme-ui */
import { Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import BulletFeature from 'components/cards/bullet-feature';
import ResponsiveIframe from 'components/responsive-iframe';
import { TriggerAnalytics, ComponentType } from 'analytics/trigger'

const data = [
  {
    id: 1,
    title: 'Embedded QR Code',
    description: [`Know the Juans behind your packaging`,
                  `How many times the packaging has been used `,
                  `How to return the packaging `,]
  },
  {
    id: 2,
    title: 'Safety and Security',
    description: [`Made with durable and waterproof canvas and vinyl tarpaulins`,
                  `Used sealing stickers to provide tamper protection`,
                  `Easy sanitation`,]
  },
]

const UsefulFeatures = () => {
  return (
  <TriggerAnalytics name="Features" component={ComponentType.SECTION}>
    <Box as="section" id="features" variant="section.features" sx={styles.featuresBackground}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="JuanBag Features"
        />
        <Box sx={styles.boxWrapper}>
          <Box sx={styles.leftContent}>
            <Box sx={styles.videoContainer}>
              <ResponsiveIframe
                  src="https://www.youtube.com/embed/Q_0cnomgTvk?autoplay=1&mute=1&controls=0&playlist=Q_0cnomgTvk&loop=1&modestbranding=1"
                  allow="autoplay; loop;"
                  allowFullScreen
                  aspectRatio={1}
                />
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <Box sx={styles.features}>
              <Box>
                <BulletFeature
                  key={data[0].id}
                  data={data[0]}
                  className="feature-item"
                />
              </Box>
              <Box>
                <BulletFeature
                  key={data[1].id}
                  data={data[1]}
                  className="feature-item"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </TriggerAnalytics>
  );
};

export default UsefulFeatures

const styles = {
  featuresBackground: {
    backgroundColor: 'white'
  },
  heading: {
    marginBottom: 80,
    textAlign: 'center',
  },
  features: {
    gap: 40,
    display: 'flex',
    flexDirection: 'column',
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
  videoContainer: {
    flexGrow: 1,
  },
  boxWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 30],
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    marginLeft: '1.5em',
    '@media screen and (max-device-width: 768px) ': {
      width: '100%',
      marginLeft: '0',
      marginTop: '2em',
      textAlign: 'left',
    },
  },
  leftContent: {
    width: '50%',
    marginRight: '1.5em',
    '@media screen and (max-device-width: 768px) ': {
      width: '100%',
      marginRight: '0',
      marginTop: '-2em',
    },
  }
};