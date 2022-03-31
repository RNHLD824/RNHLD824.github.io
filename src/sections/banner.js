/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import bag from 'assets/images/illustration.png'
import { ComponentType, TriggerAnalytics } from 'analytics/trigger'

const Banner = () => {
  const handleExplore = () => {
    var element = document.getElementById('about');
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  } 

  return (
    <Box id="home" as="section" variant="section.banner">
      <Container sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              A <Text as='span' sx={styles.highlight}>better</Text> way to receive your parcels
            </Heading>
            <Text as="p" sx={styles.text}>
              Juanloop, providing reusable and returnable packaging to businesses 
            </Text>
            <TriggerAnalytics name="Explore Now" component={ComponentType.BUTTON}>
              <Box>
                <Button variant="primary" sx={styles.button} onClick={handleExplore}>
                  Explore Now
                </Button>
              </Box>
            </TriggerAnalytics>
          </Box>
          <Box sx={styles.illustration}>
            <Image src={bag} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Banner

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 120, 130, 120, 120],
  },
  content: {
    maxWidth: [507, null, null, 324, 480],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '40px'],
    lineHeight: 1.10,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  highlight: {
    color: 'primary'
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '16px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.00],
    color: 'textSecondary',
    mt: ['14px', '19px'],
    maxWidth: [507, null, null, 324, 480]
  },
  button: {
    display: ['none', 'flex'],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '110%'],
    },
  },
}
