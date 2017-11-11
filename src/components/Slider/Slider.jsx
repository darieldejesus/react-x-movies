import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Slide from './Slide';

const Container = Styled.section`
  background: #FFF;
  overflow: auto;
  position: relative;
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
   }, 1000);
 }

 componentWillUnmount() {
   window.clearInterval(this.interval);
 }

 render() {
   const { entries } = this.props;
   const { currentEntry } = this.state;
   return (
     <Container>
       {entries.map((entry, index) => (
         <Slide
           key={entry.id}
           active={index === currentEntry}
           image={entry.backdrop_path}
           overview={entry.overview}
           preLoad={index === currentEntry + 1}
           rate={entry.vote_average}
           release={entry.release_date}
           title={entry.title}
         />
       ))}
     </Container>
   );
 }
}

Slider.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    backdrop_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Slider;
