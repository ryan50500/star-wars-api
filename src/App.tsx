import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsPage from './components/ResultsPage';
import Pagination from './components/Pagination'

function App() {

  // user input search term can be passed down to components
  const [searchTerm, setSearchTerm] = useState('vehicles');

  const [pageNumber, setPageNumber] = useState(1);


  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ResultsPage searchTerm={searchTerm} setPageNumber={setPageNumber} pageNumber={pageNumber} />
      <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} searchTerm={searchTerm} />
    </>
  );
}

export default App;
