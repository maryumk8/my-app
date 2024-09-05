import React from 'react';
import About from '../components/About';

export const getRoutes = () => {
  return {
    home: {
      name: 'About',
      path: '/about',
      element: <About />,
    },
  };
};
