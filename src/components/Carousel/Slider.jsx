import React, { Component } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

import Slide from './Slide';

const Container = Styled.section`
  background: #FFF;
  position: relative;
  overflow: auto;
`;

class Slider extends Component {
 state = {
   currentEntry: 0,
 };

 componentDidMount() {
   const latestIndex = this.props.entries.length - 1;
   this.interval = window.setInterval(() => {
     const { currentEntry } = this.state;
     this.setState({
       currentEntry: currentEntry === latestIndex ? 0 : (currentEntry + 1),
     });
   }, 5000);
 }

 componentWillUnmount() {
   window.clearInterval(this.interval);
 }

 render() {
   const { entries } = this.props;
   const { currentEntry } = this.state;
   return (
     <Container>
       {entries.map((entry, index) => [
         <Slide
           key={entry.title}
           active={index === currentEntry}
           title={entry.title}
           image={entry.backdrop_path}
           preLoad={index === currentEntry + 1}
         />,
    ])}
     </Container>
   );
 }
}

Slider.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
  })).isRequired,
};

export default Slider;
