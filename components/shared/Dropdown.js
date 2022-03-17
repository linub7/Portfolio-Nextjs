import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useState } from 'react';

const Dropdown = ({ items }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle = () => setDropDownOpen(!dropDownOpen);

  const renderMenu = (items) => (
    <DropdownMenu>
      {items.map((item) => (
        <DropdownItem key={item.key} {...item.handlers}>
          {item.text}
        </DropdownItem>
      ))}
    </DropdownMenu>
  );
  return (
    <ButtonDropdown
      className="port-dropdown"
      isOpen={dropDownOpen}
      toggle={toggle}
    >
      <DropdownToggle caret size="sm"></DropdownToggle>
      {renderMenu(items)}
    </ButtonDropdown>
  );
};

export default Dropdown;
