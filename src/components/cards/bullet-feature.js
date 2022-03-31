import { Box, Heading } from 'theme-ui';
import bullet from '../../assets/images/icons/chevron-arrow-list.png';

const BulletFeature = ({ data, ...props }) => {
  return (
    <Box sx={styles.featureList} {...props}>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <ul>
          {data?.description.map((item) => (
            <li> {item} </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default BulletFeature;

const styles = {
  featureList: {
    textAlign: ['center', 'left'],
    h4: {
      fontSize: '18px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '20px',
    },
    p: {
      fontSize: 15,
      lineHeight: [1.6, 1.6, 1.6, 1.6],
      color: 'text',
    },
    ul: {
      listStyleImage: `URL(${bullet})`,
      marginTop: '1em',
      marginBottom: '1em',
    },
    li: {
      marginTop: '1em',
      marginBottom: '1em',
      textAlign: 'left'
    }
  },
};
