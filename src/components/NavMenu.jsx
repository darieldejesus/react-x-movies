import React from 'react';
import Styled from 'styled-components';

import NavMenuLink from './NavMenuLink';

const NavContainer = Styled.ul`
	background: #FFF;
	border-radius: 5px;
	padding: 0;
	display: flex;
	width: max-content;
`;


const sections = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Reviews',
		href: '/reviews',
	},
];

const NavMenu = () => (
	<div>
		<NavContainer>
			{sections.map(section => (
				<NavMenuLink key={section.href} href={section.href} label={section.label} />
			))}
		</NavContainer>
	</div>
);

export default NavMenu;
