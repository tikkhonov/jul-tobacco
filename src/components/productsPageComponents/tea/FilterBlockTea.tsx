import React, { FC } from 'react'
import FilterItem from '../FilterItem'

interface FilterBlockProps {
  items: [string]
}

const FilterBlockTea: FC<FilterBlockProps> = (
  { 
    items 
  }
  ) => {
  const [activeFilterItem, setActiveFilterItem] = React.useState<number | undefined>(undefined)

  const onSelectItem = (index: number) => {
    setActiveFilterItem(index)
  }
  
  return (
    <div className="filter-block">
      <div className="filter--items">
        <div className="filter__item">
          <div className="filter__item-title">Табак для кальяна</div>
          <div className="filter_more_items">
            {
              items &&
              items.map((name, index) => {
                <FilterItem
                  key={`${name}_${index}`}
                  name={name}
                  index={index}
                  onSelectItem={onSelectItem}
                  activeFilterItem={activeFilterItem}
                />
               return <FilterItem
                key={`${name}_${index}`}
                name={name}
                index={index}
                onSelectItem={onSelectItem}
                activeFilterItem={activeFilterItem}
              />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBlockTea