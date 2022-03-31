import { Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/images/loopLogo-reg.png';
import logoWhite from 'assets/images/loopLogo-white.png';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={isWhite ? logoWhite : logo} alt="juanloop logo" width='175px' sx={styles.logoImg} />
    </Link>
  );
}

const styles = {
  logoImg: {
    marginTop: '0.2em',
    marginBottom: '0.2em',
    marginLeft: '1em',
    marginRight: '1em',
    cursor: 'pointer',
  }
}
