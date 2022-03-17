import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import { useState } from 'react';
import Link from 'next/link';

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Link href={'/portfolios/new'} passHref>
            <a
              className="nav-link port-navbar-link port-dropdown-item"
              style={{ color: '#4e4e4e' }}
            >
              Create Portfolio
            </a>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={'/blogs/editor'} passHref>
            <a
              className="nav-link port-navbar-link port-dropdown-item"
              style={{ color: '#4e4e4e' }}
            >
              Blog Editor
            </a>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={'/dashboard'} passHref>
            <a
              className="nav-link port-navbar-link port-dropdown-item"
              style={{ color: '#4e4e4e' }}
            >
              Dashboard
            </a>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AdminMenu;
