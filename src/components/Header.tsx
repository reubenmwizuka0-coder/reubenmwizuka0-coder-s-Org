import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <h1>EFOOTBALL ARENA</h1>
      <p>Tips, guides and news for eFootball players.</p>
      <a className="btn" href="#guides">
        Explore
      </a>
    </header>
  );
};
