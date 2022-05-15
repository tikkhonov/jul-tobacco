import React, { FC } from 'react'

interface FilterItemProps {
  name: string;
  index: number;
  onSelectItem: any;
  activeFilterItem: number | undefined;
}

const FilterItem: FC<FilterItemProps> = ({ name, index, onSelectItem, activeFilterItem }) => {
  return (
    <div 
      className="filter_more_items"
    >
      <div
        onClick={() => onSelectItem(index)} 
        className={
          activeFilterItem === index 
          ? "filter__more_item filter-active-item" 
          : "filter__more_item ''"
        }
      >
        <span>{name}</span>
      </div>
    </div>
  )
}

export default FilterItem