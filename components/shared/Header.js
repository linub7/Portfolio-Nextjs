import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href={'/'} passHref>
        <a> Home </a>
      </Link>
      <Link href={'/about'} passHref>
        <a>About</a>
      </Link>
      <Link href={'/blogs'} passHref>
        <a>Blogs</a>
      </Link>
      <Link href={'/cv'} passHref>
        <a>CV</a>
      </Link>
      <Link href={'/portfolios'} passHref>
        <a>Portfolios</a>
      </Link>
    </>
  );
};

export default Header;
