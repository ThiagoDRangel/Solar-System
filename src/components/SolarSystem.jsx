import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../style/solarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <section>
        <Title
          className="planets-title"
          headline="Planetas"
        />
        <section className="planets-container">
          {planets.map(({ name, image }) => (
            <PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </section>
      </section>
    );
  }
}

export default SolarSystem;

