import React from 'react';
import { Card } from './Card';
import { DREAM_TEAM_GUIDE, FORMATIONS } from '../data/arenaData';

export const GuidesSection: React.FC = () => {
  return (
    <section id="guides">
      <h2>Guides</h2>
      <Card
        title={DREAM_TEAM_GUIDE.title}
        description={DREAM_TEAM_GUIDE.description}
      />
      <div className="card">
        <h3>Best Formations</h3>
        <p>Top tactical formations for competitive play.</p>
      </div>
      {FORMATIONS.map((formation) => (
        <Card
          key={formation.id}
          title={formation.title}
          description={formation.description}
        />
      ))}
    </section>
  );
};
