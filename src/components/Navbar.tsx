import React from 'react';
import { NavItem } from '../types';

interface NavbarProps {
  items: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav>
      {items.map((item) => (
        <a key={item.id} href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
};
