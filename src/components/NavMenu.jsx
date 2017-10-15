import React from 'react';
import Styled from 'styled-components';

import NavMenuLink from './NavMenuLink';

const NavContainer = Styled.ul`
	padding: 0;
	display: flex;
	width: 100%;
	height: 80px;
	margin: 0;
	position: relative;
	top: -10px;
	padding-top: 10px;
	background: #ed0105;
`;


const sections = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Most Popular',
		href: '/popular',
	},
  {
    label: 'Genres',
    href: '/genres',
  },
  {
    label: 'Reviews',
    href: '/reviews',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const NavMenu = () => (
	<NavContainer>
		{sections.map(section => (
			<NavMenuLink key={section.href} href={section.href} label={section.label} />
		))}
	</NavContainer>
);

export default NavMenu;
