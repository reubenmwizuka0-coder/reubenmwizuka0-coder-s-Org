import React from 'react';
import { Card } from './Card';
import { NEWS } from '../data/arenaData';

export const NewsSection: React.FC = () => {
  return (
    <section id="news">
      <h2>News</h2>
      {NEWS.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} />
      ))}
    </section>
  );
};
