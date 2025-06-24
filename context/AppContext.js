import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

const initialTokens = [
  { id: 1, text: 'Need 3BHK in Thane up to \u20B91.2 Cr' },
  { id: 2, text: 'Looking for office space in Pune' },
  { id: 3, text: 'Plot near Bengaluru 2000 sqft' },
];

const initialListings = [
  {
    id: 1,
    image: 'https://placekitten.com/640/360',
    title: 'Modern Family House',
    price: '\u20B92.5 Cr',
    area: '1500 sqft',
    location: 'Mumbai',
  },
  {
    id: 2,
    image: 'https://placekitten.com/641/360',
    title: 'Urban Apartment',
    price: '\u20B91.8 Cr',
    area: '900 sqft',
    location: 'Pune',
  },
  {
    id: 3,
    image: 'https://placekitten.com/642/360',
    title: 'Cozy Cottage',
    price: '\u20B91.2 Cr',
    area: '800 sqft',
    location: 'Bangalore',
  },
];

export const AppProvider = ({ children }) => {
  const [tokens, setTokens] = useState(initialTokens);
  const [listings, setListings] = useState(initialListings);

  const addToken = (text) => {
    setTokens((prev) => [...prev, { id: Date.now(), text }]);
  };

  const addListing = (listing) => {
    setListings((prev) => [...prev, { id: Date.now(), ...listing }]);
  };

  return (
    <AppContext.Provider value={{ tokens, listings, addToken, addListing }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
