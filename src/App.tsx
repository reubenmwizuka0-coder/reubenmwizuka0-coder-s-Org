import React from 'react';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Pitch } from './components/Pitch';
import { GuidesSection } from './components/GuidesSection';
import { TipsSection } from './components/TipsSection';
import { NewsSection } from './components/NewsSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { NAV_ITEMS } from './data/arenaData';

export const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar items={NAV_ITEMS} />
      <Header />
      <Pitch />
      <main>
        <GuidesSection />
        <TipsSection />
        <NewsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
