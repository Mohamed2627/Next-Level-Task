import React, { useState, createContext } from 'react';
import { FILTER_NAMES } from '../enums';

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState(FILTER_NAMES.ALL);
  const [searchValue, setSearchValue] = useState("");
  return (
    <FilterContext.Provider
      value={{
        currentFilter,
        setCurrentFilter,
        searchValue,
        setSearchValue
      }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;