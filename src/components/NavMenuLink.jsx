import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = Styled(NavLink)`
	color: red;
	text-decoration: none;
`;

const NavItem = Styled.li`
	list-style-type: none;
	padding: 10px 20px;
	cursor: pointer;
`;

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