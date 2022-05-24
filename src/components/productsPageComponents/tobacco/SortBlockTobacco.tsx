import React, { FC } from 'react'
interface SortBlockProps {
  items: {name: string, type: string, order: string}[],
  onClickSortItem: (index: any) => any,
  activeSortItem: string;
}

const SortBlockTobacco: FC<SortBlockProps> = ({ items, onClickSortItem, activeSortItem }) => {
  const [visibleSortBlock, setVisibleSortBlock] = React.useState<boolean>(false)
  const sortRef = React.useRef<HTMLDivElement>(null)
  // const [activeSortItem, setActiveSortItem] = React.useState<number>(0)
  
  const activeLabel: any = items.find(obj => obj.type === activeSortItem)?.name
  
  const onSelectItem = (item: {name: string, type: string, order: string}) => {
    onClickSortItem(item)
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
            items.map((item: {name: string, type: string, order: string}, index: number) => {
              return (
                <div
                  key={`${item.name}_${index}`}
                >
                  <div
                    onClick={() => onSelectItem(item)} 
                    className={activeSortItem === item.type ? "sort__item sort__item-active" : "sort__item ''"}
                  >
                    {item.name}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="16" fill="#6BFF37"/>
                      <path d="M7 17.5L12.5 23L25.5 10" stroke="#EFEFEF" strokeWidth="5"/>
                    </svg>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default SortBlockTobacco


              // <SortBlockItemTobacco 
              //   key={`${item}_${index}`}
              //   name={item.name} 
              //   index={index}
              //   onSelectItem={onSelectItem}
              //   activeSortItem={activeSortItem}
              //   items={items}
              //   type={item.type}
              // />
              // return <SortBlockItemTobacco
              //   key={`${item}_${index}`}
              //   name={item.name} 
              //   index={index}
              //   onSelectItem={onSelectItem}
              //   activeSortItem={activeSortItem}
              //   items={items}
              //   type={item.type}