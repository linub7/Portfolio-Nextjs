import Link from 'next/link';

const LogoutBtn = () => {
  return (
    <Link href={'/api/v1/logout'} passHref>
      <a className="nav-link port-navbar-link clickable">Logout</a>
    </Link>
  );
};

export default LogoutBtn;
