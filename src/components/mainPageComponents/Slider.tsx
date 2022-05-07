import React, { Children } from 'react'

const Slider = ({ children }: {
  children: JSX.Element | JSX.Element[]
}) => {
  const [sliderPages, setSliderPages] = React.useState<React.ReactNode>([])
  const [offset, setOffset] = React.useState<number>(0)

  const SLIDER_BLOCK_WIDTH: number = 1907
  
  const onHandleLeftCircle: React.ReactEventHandler = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + SLIDER_BLOCK_WIDTH
      return Math.min(newOffset, 0)
    })
  }
  const onHandleRightCircle: React.ReactEventHandler = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - SLIDER_BLOCK_WIDTH
      const maxOffset: number = -(1907*2)
      return Math.max(newOffset, maxOffset)
    })
  }
  
  React.useEffect(() => {
    setSliderPages(
      Children.map(children, child => {
        return React.cloneElement(child, {
          style: {
            height: `100%`,
            minWidth: `${SLIDER_BLOCK_WIDTH}px`,
            maxWidth: `${SLIDER_BLOCK_WIDTH}px`,
          },
        })
      })
    )
  }, [])
  
  return (
    <div className="slider-wrapper">
      <div className="window">
        <div 
          className="slider-blocks"
          style={{
            transform: `translateX(${offset}px)`
          }}
        >
          {sliderPages}
        </div>
        <div className="slider-circles-container">
          <button 
            className="slider__circle slider__circle-1"
            onClick={onHandleLeftCircle}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="48" 
              width="48"
            >
              <path d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"/>
            </svg>
          </button>
          <button 
            className="slider__circle slider__circle-2"
            onClick={onHandleRightCircle}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="48" 
              width="48"
            >
              <path d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider