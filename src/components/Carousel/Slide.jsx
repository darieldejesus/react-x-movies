import React from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div`
  background: #FFF;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  float: left;
  margin-right: -100%;

  ${props => props.active && css`
    opacity: 1;
    z-index: 2;
  `}
`;

const Slide = ({
  active, title, image, preLoad,
}) => (
  <Container active={active}>
    {/* <h1>{title}</h1> */}
    {(active || preLoad) && <img src={`https://image.tmdb.org/t/p/w780/${image}`} alt={title} />}
  </Container>
);

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  preLoad: PropTypes.bool.isRequired,
};

export default Slide;
