import { Box, Heading, Text } from 'theme-ui';

const FeatureCard = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
      </Box>
    </Box>
  );
};

export default FeatureCard;

const styles = {
  feature: {
    textAlign: 'left',
    maxWidth: [230, 230, 230, 230, 'none'],
    margin: '0 auto',
    marginTop: '1em',
    marginBottom: '1em',
    height: '20em',
    '@media screen and (max-device-width: 768px) ': {
      height: 'auto',
      marginBottom: '4em',
      marginLeft: '1.2em',
      marginRight: '1.2em',
      maxWidth: 'none',
    },
    h4: {
      fontSize: '18px',
      lineHeight: 1,
      color: 'heading',
      marginBottom: '20px',
      textAlign: 'center'
    },
    p: {
      fontSize: 15,
      lineHeight: [1.6, 1.6, 1.6, 1.6],
      color: 'text',
      textAlign: 'justify'
    },
  },
};
