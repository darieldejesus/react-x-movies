import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = Styled(NavLink)`
	color: #63676f;
	text-decoration: none;
	font-weight: 500;
	font-size: 15px;
	text-transform: uppercase;
`;

const NavItem = Styled.li`
	background: #eaeaeb;
	list-style-type: none;
	box-shadow: inset -1px 0px 0px #cecece;
	padding: 10px 20px;
	cursor: pointer;
	flex: 1;
	text-align: center;
	display: flex;
	justify-content: center;
	flex-direction: column;
	
	&:last-child {
		box-shadow: none;
	}
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