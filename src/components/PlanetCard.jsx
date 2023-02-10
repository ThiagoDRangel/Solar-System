import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <section className="planet">
        <img
          className="img-planet"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p
          className="name-planet"
        >
          {planetName}
        </p>
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
