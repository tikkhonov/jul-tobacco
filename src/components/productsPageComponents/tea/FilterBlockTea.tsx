import React, { FC } from 'react'

interface FilterBlockProps {
  items: string[], 
  onClickFilterItem: (index: any) => any;
  activeFilterItem: any;
}

const FilterBlockTea: FC<FilterBlockProps> = ({ onClickFilterItem, items, activeFilterItem}) => {
  const onSelectItem = (index: number) => {
    onClickFilterItem(index)
  }
  
  return (
    <div className="filter-block">
      <div className="filter--items">
        <div className="filter__item">
          <div className="filter__item-title">Чай</div>
          <div className="filter_more_items">
            {
              items &&
              items.map((name, index) => {
                return <div 
                  key={`${name}_${index}`}
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
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBlockTea