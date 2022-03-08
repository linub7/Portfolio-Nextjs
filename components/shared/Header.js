import Link from 'next/link';
import { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import LoginBtn from '@/components/auth/LoginBtn';
import LogoutBtn from '@/components/auth/LogoutBtn';

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        expand="md"
        dark
      >
        <NavbarBrand className="port-navbar-brand">
          <Link href={'/'} passHref>
            <span
              className="nav-link port-navbar-link"
              style={{ cursor: 'pointer' }}
            >
              M.Hadi
            </span>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem className="port-navbar-item">
              <Link href="/" passHref>
                <a className="nav-link port-navbar-link">Home</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/about" passHref>
                <a className="nav-link port-navbar-link">About</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/portfolios" passHref>
                <a className="nav-link port-navbar-link">Portfolios</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/blogs" passHref>
                <a className="nav-link port-navbar-link">Blogs</a>
              </Link>
            </NavItem>
            <NavItem className="port-navbar-item">
              <Link href="/cv" passHref>
                <a className="nav-link port-navbar-link">Cv</a>
              </Link>
            </NavItem>
          </Nav>
          <Nav navbar>
            {!loading && (
              <>
                {!user ? (
                  <NavItem className="port-navbar-item">
                    <LoginBtn />
                  </NavItem>
                ) : (
                  <NavItem className="port-navbar-item">
                    <LogoutBtn />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
