import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useStateContext } from '../contexts/StateContextProvider';
import  Loading  from './Loading';

 const Results = () => {
  const { results, loading, getResults, searchTerm } = useStateContext();
  const location = useLocation();

  useEffect(() => {
    getResults(searchTerm)
  }, [searchTerm]);

  if (loading) return <Loading />;
  console.log(location.pathname)

  switch (location.pathname) {
    case '/search':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
              {
                results?.results?.map(({url,title},position)=>(
                  <div key={position} className="md:w-2/5 w-full">
              <a href={url} target="_blank" rel="noreferrer">
                <p className="text-sm">{url.length > 30 ? url.substring(0, 30) : url}</p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
              </a>
            </div>
                ))
              }
            </div>  
      );
    case '/images':
      return (
        <div className="flex flex-wrap justify-center items-center">
          API has removed Images Query ...
        </div>
      );
    case '/news':
      return (
        <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
         API has removed News query....
        </div>
      );
    case '/videos':
      return (
        <div className="flex flex-wrap ">
          API has removed Videos query...
        </div>
      );
    default:
      return 'Error...';
  }
 };

export default Results
