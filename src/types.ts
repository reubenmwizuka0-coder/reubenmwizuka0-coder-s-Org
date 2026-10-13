export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
}

export interface FormationItem extends CardItem {
  playstyle?: string;
}

export interface SocialLink {
  name: string;
  url: string;
}
