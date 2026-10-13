import React from 'react';
import { Card } from './Card';
import { TIPS } from '../data/arenaData';

export const TipsSection: React.FC = () => {
  return (
    <section id="tips">
      <h2>Tips</h2>
      {TIPS.map((tip) => (
        <Card key={tip.id} title={tip.title} description={tip.description} />
      ))}
    </section>
  );
};
