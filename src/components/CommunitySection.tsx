import React from 'react';
import { SOCIAL_LINKS } from '../data/arenaData';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community">
      <h2>Community</h2>
      <div className="social">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};
