import React, { FC } from 'react'
import SortBlockItem from '../SortBlockItem'

interface SortBlockProps {
  items: [string, string, string, string]
}

const SortBlockTea: FC<SortBlockProps> = ({ items }) => {
  const [visibleSortBlock, setVisibleSortBlock] = React.useState<boolean>(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const [activeSortItem, setActiveSortItem] = React.useState<number>(0)
  
  const activeLabel = items[activeSortItem]
  
  const onSelectItem = (index: number) => {
    setActiveSortItem(index)
  }
  
  const toggleVisibleSortBlock = () => {
    setVisibleSortBlock(!visibleSortBlock)
  }
  
  return (
    <div
      ref={sortRef} 
      className="sort-block"
    >
      <div className="sort-block_title">
        Сортировать по:
        <br/>
        <span onClick={toggleVisibleSortBlock}>{activeLabel}</span>
      </div>
      {
        visibleSortBlock &&
        <div className="sort--items">
          {
            items &&
            items.map((name, index) => {
              <SortBlockItem 
                key={`${name}_${index}`}
                name={name} 
                index={index}
                onSelectItem={onSelectItem}
                activeSortItem={activeSortItem}
              />
              return <SortBlockItem
                key={`${name}_${index}`}
                name={name} 
                index={index}
                onSelectItem={onSelectItem}
                activeSortItem={activeSortItem}
              />
            })
          }
        </div>
      }
    </div>
  )
}

export default SortBlockTea