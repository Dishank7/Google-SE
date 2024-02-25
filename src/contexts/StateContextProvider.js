import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`https://google-search74.p.rapidapi.com/?query=${url}&limit=20&related_keywords=true`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Hos': 'google-search74.p.rapidapi.com',
        'X-RapidAPI-Key':'fde327a31emshffc06a8b938076cp1c8472jsn480221d5ce30',
      },
    });

    const data = await res.json();

    console.log(data)

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
