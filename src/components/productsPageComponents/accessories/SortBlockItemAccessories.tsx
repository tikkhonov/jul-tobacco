import React, { FC } from 'react'

interface SortBlockItemProps {
  index: number;
  name: string;
  onSelectItem: any;
  activeSortItem: number;
  items: any[] | undefined;
}

const SortBlockItemAccessories: FC<SortBlockItemProps> = 
({ 
  index, 
  name,
  onSelectItem,
  activeSortItem,
  items,
}) => {
  
  return (
    <div>
      {
        items &&
        items.map((obj: any, index: any) => (
          <div
            onClick={() => onSelectItem(obj.type)} 
            className={activeSortItem === obj.type ? "sort__item sort__item-active" : "sort__item ''"}
          >
            {obj.name}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#6BFF37"/>
              <path d="M7 17.5L12.5 23L25.5 10" stroke="#EFEFEF" strokeWidth="5"/>
            </svg>
          </div>
        ))
      }
    </div>
  )
}

export default SortBlockItemAccessories