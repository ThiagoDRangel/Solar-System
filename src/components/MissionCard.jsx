import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <section className="missions-card">
        <main className="container">
          <p className="card-name">{name}</p>
          <p className="card-year">{year}</p>
          <p className="card-country">{country}</p>
          <p className="destination">{destination}</p>
        </main>
      </section>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;

