import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginBtn = () => {
  return (
    <Link href={'/api/v1/login'} passHref>
      <a className="nav-link port-navbar-link clickable">Login</a>
    </Link>
  );
};

export default LoginBtn;
