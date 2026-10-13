import { NavItem, CardItem, FormationItem, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'guides', label: 'Guides', href: '#guides' },
  { id: 'tips', label: 'Tips', href: '#tips' },
  { id: 'news', label: 'News', href: '#news' },
  { id: 'community', label: 'Community', href: '#community' },
];

export const DREAM_TEAM_GUIDE: CardItem = {
  id: 'dream-team',
  title: 'Dream Team',
  description: 'Build your squad and climb the ranks.',
};

export const FORMATIONS: FormationItem[] = [
  {
    id: '4-3-3',
    title: '4-3-3',
    description: 'Attacking. Wingers stretch the defense. Best for fast players.',
  },
  {
    id: '4-2-3-1',
    title: '4-2-3-1',
    description: 'Balanced. Two holding midfielders protect the defense.',
  },
  {
    id: '3-5-2',
    title: '3-5-2',
    description: 'Midfield control. Wing-backs must have high stamina.',
  },
];

export const TIPS: CardItem[] = [
  {
    id: 'online-matches',
    title: 'Online Matches',
    description: 'Tactics to win more matches.',
  },
  {
    id: 'shooting-passing',
    title: 'Shooting & Passing',
    description: 'Score more with better timing.',
  },
];

export const NEWS: CardItem[] = [
  {
    id: 'events-updates',
    title: 'Events & Updates',
    description: 'Latest events, player packs and patches.',
  },
  {
    id: 'player-reviews',
    title: 'Player Reviews',
    description: 'Who is worth your coins this week.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Discord', url: 'https://discord.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];
