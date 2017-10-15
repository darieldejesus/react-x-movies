import React from 'react';
import Styled from 'styled-components';

import NavMenu from './NavMenu';

const TopSection = Styled.section`
	background: #31353d;
	height: 200px;
`;

const ContentContainer = Styled.section`
	background: #fff;
	padding: 0 30px;
	max-width: 1024px;
	margin: 0 auto;
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
export default BasePage;
