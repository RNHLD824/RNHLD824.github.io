/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import blogImage from '../assets/images/blogs/blog1-updated-2.png';
import { ComponentType, TriggerAnalytics } from 'analytics/trigger'

const Blog = () => {
  const handleReadBlogs = () => {
    const url = "https://scythe-seeder-2b0.notion.site/Tiny-Bubble-Wraps-JuanLoop-Offers-Alternative-to-Single-use-Packaging-aba4c3b7b78246c19a128b636a747670"
    window.open(url);
  } 

  return (
    <TriggerAnalytics name="Blog" component={ComponentType.SECTION}>
      <Box id="blog" as="section" variant="section.blog" sx={styles.blog}>
      <Container sx={styles.contentWrapper}>
        <Heading sx={styles.heading}>Blog Posts</Heading>
        <Box sx={styles.boxWrapper}>
          <Box sx={styles.leftContent}>
            <Box sx={styles.imgHolder}>
              <Image src={blogImage} width={480}/>
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <Heading sx={styles.blogTitle}>
              Tiny Bubble...Wraps: JuanLoop Offers Alternative to Single-use Packaging
            </Heading>
            <Text as='p' sx={styles.blogDescription}>
              Filipinos reported to increase consumption of single-use plastic by 300% after online shopping trends. JuanLoop provides environment-friendly JuanBag packaging to mitigate the plastic crisis.
            </Text>
            <Button variant="primary" sx={styles.button} onClick={handleReadBlogs}>
              Read This Blog
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
    </TriggerAnalytics>
  )
}

export default Blog

const styles = {
  blog: {
    paddingTop: '3em',
    paddingBottom: '3em',
    marginLeft: '3%',
    '@media screen and (max-device-width: 768px) ': {
      paddingTop: '0',
    paddingBottom: '3em',
    },
  },
  contentWrapper: {
    display: [null, null, null, 'grid'],
    alignItems: 'center',
    justifyContent: 'center',
    p: [50, 50, 50, 50]
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
  },
  boxWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 30],
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
  },
  imgHolder: {
    marginRight: '3%',
    marginLeft: '3%',
    '@media screen and (max-device-width: 768px) ': {
      marginRight: '0%',
      marginLeft: '0%',
    },
  },
  rightContent: {
    flex: 1,
  },
  button: {
    marginTop: '1em',
  },
  blogTitle: {
    fontWeight: 'bold',
    marginBottom: '1em',
    '@media screen and (max-device-width: 768px) ': {
      textAlign: 'center'
    },
  },
  blogDescription: {
    marginBottom: '1em',
    textAlign: 'justify',
    lineHeight: [1.5, 1.5],
  }
}