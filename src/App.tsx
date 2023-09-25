import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ResultsPage from './components/ResultsPage';

function App() {
  // user input search term can be passed down to components
  const [searchTerm, setSearchTerm] = useState('vehicles');
  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ResultsPage searchTerm={searchTerm} />
    </>
  );
}

export default App;
