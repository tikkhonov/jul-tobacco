import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import WarningBlock from './WarningBlock'

function Layout() {
  return (
    <>
      <Header/>

      <Outlet/>

      <WarningBlock/>
      <Footer/>
    </>
  )
}

export default Layout