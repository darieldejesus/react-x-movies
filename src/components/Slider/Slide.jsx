import React, { Component } from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div`
  background: #FFF;
  display: flex;
  float: left;
  margin-right: -100%;
  opacity: 0;
  transition: opacity 1s;
  width: 100%;
  z-index: 1;

  ${props => props.active && css`
    opacity: 1;
    z-index: 2;
  `}
`;

const Image = Styled.img`
  flex: 1;
`;

const DetailsContainer = Styled.div`
  flex: 1;
  padding: 10px;
`;

const Header = Styled.h1`
  color: #ed0105;
  font-size: 2em;
`;

const Details = ({ title, date, rate, overview }) => {
  return (
    <DetailsContainer>
      <Header>{ title }</Header>
      <p><b>Release: </b>{date}</p>
      <p><b>Rating: </b>{rate}</p>
      <p>{overview}</p>
    </DetailsContainer>
  )
};

class Slide extends Component {
  state = {
    loaded: false,
  }

  componentDidMount () {
    this.props.active && this.setState({ loaded: true });
  }

  componentWillReceiveProps() {
    !this.state.loaded && this.props.active && this.setState({ loaded: true });
  }

  render () {
    const { active, title, image, preLoad, overview, release, rate } = this.props;
    const { loaded } = this.state;

    return (
      <Container active={active}>
        {(loaded || active || preLoad)
        && [
          <Image key="slide-image" src={`https://image.tmdb.org/t/p/w780/${image}`} alt={title} />,
          <Details key="slide-details" title={title} date={release} rate={rate} overview={overview}/>
        ]
        }
      </Container>
    )
  }
}

Slide.propTypes = {
  active: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  preLoad: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Slide;
