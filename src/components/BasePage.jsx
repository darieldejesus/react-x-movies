import React from 'react';
import Styled from 'styled-components';

import NavMenu from './NavMenu';

const TopSection = Styled.section`
	background: transparent;
	padding: 30px 0;
`;

const Container = Styled.section`
	background: #FFF;
	border-radius: 5px;
	padding: 30px;
`;

class BasePage extends React.Component {
	render() {
		return [
			<TopSection key="topSection">
				<NavMenu/>
			</TopSection>,
			<Container key="contentSection">
				{ this.props.children }
			</Container>
		]
	}

}
export default BasePage;
