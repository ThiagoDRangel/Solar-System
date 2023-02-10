import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missions.css';

class Missions extends Component {
  render() {
    return (
      <section>
        <Title headline="Missões" />
        <section className="container-missions">
          {missions.map(({
            name,
            year,
            country,
            destination,
          }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </section>
      </section>
    );
  }
}

export default Missions;
