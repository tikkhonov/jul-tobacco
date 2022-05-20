import React, { FC } from 'react'
import SortBlockItem from '../SortBlockItem'
interface SortBlockProps {
  items: {name: string, type: string}[],
  onClickItem: (index: any) => any,
}

const SortBlockTobacco: FC<SortBlockProps> = ({ items, onClickItem }) => {
  const [visibleSortBlock, setVisibleSortBlock] = React.useState<boolean>(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  const [activeSortItem, setActiveSortItem] = React.useState<number>(0)
  
  const activeLabel = items[activeSortItem].name
  
  const onSelectItem = (index: number) => {
    setActiveSortItem(index)
    onClickItem(index)
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
            items.map((item, index) => {
              <SortBlockItem 
                key={`${item}_${index}`}
                name={item.name} 
                index={index}
                onSelectItem={onSelectItem}
                activeSortItem={activeSortItem}
              />
              return <SortBlockItem
                key={`${item}_${index}`}
                name={item.name} 
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

export default SortBlockTobacco