import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import NavMenu from './NavMenu/';

const TopSection = Styled.section`
	background: #31353d;
	height: 200px;
`;

const ContentContainer = Styled.section`
	background: #fff;
	margin: 0 auto;
	max-width: 1024px;
	padding: 0 30px;
`;

class BasePage extends React.Component {
	render() {
		return [
			<TopSection key="topSection">
				{/*Logo should be here*/}
        {/*Search input should be here*/}
			</TopSection>,
			<ContentContainer key="contentSection">
        <NavMenu/>
				{ this.props.children }
			</ContentContainer>
		]
	}
}

BasePage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasePage;
