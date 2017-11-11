import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = Styled(NavLink)`
  color: #63676f;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
`;

Link.displayName = 'Link';

const NavItem = Styled.li`
  background: #eaeaeb;
  box-shadow: inset -1px 0px 0px #cecece;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  list-style-type: none;
  padding: 10px 20px;
  text-align: center;

  &:last-child {
    box-shadow: none;	
  }`;

NavItem.displayName = 'NavItem';

const NavMenuLink = ({ href, label }) => (
  <NavItem>
    <Link to={href} activeClassName="active">
      {label}
    </Link>
  </NavItem>
);

NavMenuLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavMenuLink;