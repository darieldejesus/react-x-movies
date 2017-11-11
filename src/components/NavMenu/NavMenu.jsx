import React from 'react';
import Styled from 'styled-components';

import NavMenuLinks from '../../config/navigationMenu';
import NavMenuLink from './NavMenuLink';

const NavContainer = Styled.ul`
  background: #ed0105;
  display: flex;
  height: 80px;
  margin: 0;
  padding: 10px 0 0 0;
  position: relative; 
  top: -10px;
  width: 100%;
`;

NavContainer.displayName = 'NavContainer';

const NavMenu = () => (
  <NavContainer>
    {NavMenuLinks.map(section => (
      <NavMenuLink key={section.href} href={section.href} label={section.label} />
    ))}
  </NavContainer>
);

export default NavMenu;
