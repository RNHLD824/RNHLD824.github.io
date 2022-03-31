import { Box, Text, Container } from 'theme-ui';
import Logo from 'components/logo';
import { Link } from 'components/link';
import FooterWidget from 'components/footer-widget';
import { menuItems, footerNav } from './footer.data';
import { rgba } from 'polished';
import { ImFacebook, ImTwitter,  } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { ComponentType, TriggerAnalytics } from 'analytics/trigger'

export default function Footer() {
  return (
    <TriggerAnalytics name="Footer" component={ComponentType.SECTION}>
    <Box as="footer" variant="layout.footer">
      {/* <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container> */}
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span">
              Copyright by {new Date().getFullYear()} JuanLoop
            </Text>
          </Box>
          <Box as="div" sx={styles.footerNavContainer} >
            <Box as="div" sx={styles.footerNavIcons}>
              <li><a href="https://www.facebook.com/itsJuanLoop" target="_blank"><ImFacebook/></a></li>
              <li><a href="https://twitter.com/itsJuanLoop" target="_blank"><ImTwitter/></a></li>
              <li><a href="https://www.instagram.com/itsjuanloop/?hl=en" target="_blank"><SiInstagram/></a></li>
            </Box>
            <Box as="ul" sx={styles.footerNav}>
              {footerNav.map(({ path, label }, i) => (
                <li key={i}>
                  <Link path={path} key={i} label={label} variant="footer" style={{ cursor: 'pointer' }} />
                </li>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
    </TriggerAnalytics>
  )
}

const styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10,
    },
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },
  footerNavContainer: {
    display: 'flex',
    flexFlow: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 768px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
    },
    '@media only screen and (max-width: 768px)': {
      margin: '0',
    },
  },
  footerNavIcons: {
    fontSize: '20px',
    listStyle: 'none',
    padding: 0,
    margin: '0 25px 0 0',
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['15px', '15px', '15px'],
      '@media only screen and (max-width: 400px)': {
        mb: '15px',
      },
    },
    a: {
      color: 'textSecondary',
    },
    '@media only screen and (max-width: 768px)': {
    marginTop: '25px',
    marginLeft: '25px',
    marginRight: '25px',
    marginBottom: '5px',
    },
  },
}
