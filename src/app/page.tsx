'use client';

import React from 'react';
import Header from '@/components/Header';

const HomePage = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <div>
      <Header
        label="Welcome to Dreamer Dance NYC!"
        backgroundColor="#ff0099"
        size="medium"
        textAlign="center"
        width="100%"
        height="200px"
        textHeight="center"
        links={links}
      />
      {/* Add other components as needed */}
    </div>
  );
};

export default HomePage;
