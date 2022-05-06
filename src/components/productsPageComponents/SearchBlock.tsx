import React from 'react'

function SearchBlock() {
  return (
    <form className="search-block">
      <div className="search--items">
        <div className="search__loupe">
          <svg 
            width="26" 
            height="26" 
            viewBox="0 0 42 42" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M30.0172 26.4151H28.1201L27.4477 25.7667C29.801 23.0292 31.2178 19.4751 31.2178 15.6089C31.2178 6.98799 24.2298 0 15.6089 0C6.98799 0 0 6.98799 0 15.6089C0 24.2298 6.98799 31.2178 15.6089 31.2178C19.4751 31.2178 23.0292 29.801 25.7667 27.4477L26.4151 28.1201V30.0172L38.422 42L42 38.422L30.0172 26.4151V26.4151ZM15.6089 26.4151C9.6295 26.4151 4.80274 21.5883 4.80274 15.6089C4.80274 9.6295 9.6295 4.80274 15.6089 4.80274C21.5883 4.80274 26.4151 9.6295 26.4151 15.6089C26.4151 21.5883 21.5883 26.4151 15.6089 26.4151Z" 
              fill="#303030"
            />
          </svg>
        </div>
        <input placeholder="Search . . ." type="text" className="search__input"/>
      </div>
    </form>
  )
}

export default SearchBlock