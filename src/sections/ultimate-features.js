/** @jsxImportSource theme-ui */
import { Box, Container, Image, Heading, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import FeatureCard from 'components/cards/feature-card';
import loop from 'assets/images/loop.png'
import { TriggerAnalytics, ComponentType } from 'analytics/trigger'

const itemsBetter = [
  {
    id: 1,
    title: 'Reduce Single-Use Plastic',
    description: <div>Our JuanBags can be reused more than a *hundred times! Say good bye to plastic waste!<br/><span style={{ fontSize: '12px', color: 'gray' }}>*with proper handling and care</span></div>,
  },
  {
    id: 2,
    title: 'Lower packaging costs',
    description: 'We provide better value to our partner businesses through our loop system, lessening consumption of single-use packaging while retaining relationships with consumers.',
  },
]

const itemsImpact = [
  {
    id: 1,
    title: 'Provide Livelihood',
    description: 'Every time you choose JuanBag, you create an impact by giving work opportunities to our Nanay weavers and partner bikers.',
  },
  {
    id: 2,
    title: 'Support Green Initiatives',
    description: `When you return JuanBag, you can convert your points into rewards and incentives, and be invited in initiatives that help mitigate the climate crisis.`,
  },
]

const UltimateFeatures = () => {
  return (
  <TriggerAnalytics name="About" component={ComponentType.SECTION}>
    <Box as="section" id="about" variant="section.about">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="About JuanLoop"
        />
      </Container>
      <Container sx={styles.loopWrapper}>
        <Box sx={styles.boxWrapper}>
          <Box sx={styles.leftContent}>
            <Heading sx={styles.header}>We help you shift to <Text as='span' sx={styles.highlight}>better</Text> packaging.</Heading>
            <Box>
              <FeatureCard key={itemsBetter[0].id} data={itemsBetter[0]} />
            </Box>
            <Box>
              <FeatureCard key={itemsBetter[1].id} data={itemsBetter[1]} />
            </Box>
          </Box>
          <Box sx={styles.middleContent}>
            <Image src={loop}/>
          </Box>
          <Box sx={styles.rightContent}>
            <Heading sx={styles.header}>We help you create an <Text as='span' sx={styles.highlight}>impact</Text>.</Heading>
            <Box>
              <FeatureCard key={itemsImpact[0].id} data={itemsImpact[0]} />
            </Box>
            <Box>
              <FeatureCard key={itemsImpact[1].id} data={itemsImpact[1]} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </TriggerAnalytics>
  );
};

export default UltimateFeatures

const styles = {
  about: {
    '@media screen and (max-device-width: 768px) ': {
      marginBottom: '2em',
    },
  },
  heading: {
    marginBottom: [60, 60, 60, 80],
    textAlign: 'center',
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
  loopWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '-12em',
    '@media screen and (max-device-width: 768px) ': {
      marginBottom: '-7em',
    },
  },
  boxWrapper: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
  },
  highlight: {
    color: 'primary'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2em',
    fontWeight: 'bold',
    height: '3em',
    '@media screen and (max-device-width: 768px) ': {
      height: 'auto',
    },
  },
  leftContent: {
    width: '27%',
    '@media screen and (max-device-width: 768px) ': {
      width: '100%',
    },
  },
  middleContent: {
    marginBottom: '4em',
    marginTop: '4em',
    paddingLeft: '2em',
    paddingRight: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '46%',
    '@media screen and (max-device-width: 768px) ': {
      width: '100%',
      paddingLeft: '0',
      paddingRight: '0',
    },
  },
  rightContent: {
    width: '27%',
    '@media screen and (max-device-width: 768px) ': {
      width: '100%',
    },
  },
};
