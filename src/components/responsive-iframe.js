import { Box } from 'theme-ui';

const ResponsiveIframe = ({ src, height='100%', width='100%', aspectRatio=9/16, children, ...props }) => {
  const styles = {
    videoContainer: {
      overflow: 'hidden',
      paddingTop: `${aspectRatio * 100}%`,
      position: 'relative',
      iframe: {
        border: 0,
        // height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        // width: '100%',
      },
    },
  };

  return (
    <Box sx={styles.videoContainer}>
      {children ? children : <iframe src={src} width={width} height={height} {...props}></iframe>}
    </Box>
  );
};

export default ResponsiveIframe;
