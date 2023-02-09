import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/planetCard.css';

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
      </section>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCard;
