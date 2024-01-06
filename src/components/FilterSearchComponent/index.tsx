import React, { useContext, useEffect, useState } from 'react';
import "./style.css";
import { IoFilterOutline, IoSearchOutline } from "react-icons/io5";
import { IconButton, MenuItem, TextInput } from '../../UI';
import { FILTER_NAMES } from '../../enums';
import { FilterContext } from '../../context';

const filterData = [FILTER_NAMES.ALL, FILTER_NAMES.COMPLETED, FILTER_NAMES.IN_PROGRESS]

const FilterSearchComponent = () => {

  // Hooks------------------------------------
  const { searchValue, setSearchValue, currentFilter, setCurrentFilter } = useContext(FilterContext)

  // State------------------------------------
  const [dropMenuToggle, setDropMenuToggle] = useState(false)

  // Functions--------------------------------
  const onChangeFilter = (filterType: string) => {
    setCurrentFilter(filterType);
    setDropMenuToggle(!dropMenuToggle)
  }

  return (
    <div className='filter-container'>
      <TextInput
        value={searchValue}
        setValue={setSearchValue}
        innerIcon={<IoSearchOutline />}
      />
      <div className='filter-drop-container'>

        <IconButton icon={<IoFilterOutline size={30} />} onClick={() => setDropMenuToggle(!dropMenuToggle)} style={{ height: "100%" }} />
        {dropMenuToggle && (
          <div className='drop-menu-container'>
            {filterData.map((filterType, index) => (
              <MenuItem
                key={index}
                name={filterType}
                onClick={() => onChangeFilter(filterType)}
                style={{ backgroundColor: filterType == currentFilter ? "#666" : "#FFF" }}
              />
            )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterSearchComponent