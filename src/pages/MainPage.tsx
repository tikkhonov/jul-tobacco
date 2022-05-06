import React from 'react'

import CardsBlock4x from '../components/mainPageComponents/CardsBlock4x';
import Categories from '../components/mainPageComponents/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainInfo from '../components/mainPageComponents/MainInfo';
import Slider from '../components/mainPageComponents/Slider';
import WarningBlock from '../components/WarningBlock';
import EmptyLine from '../components/mainPageComponents/EmptyLine';

function MainPage() {
  return (
    <div className="MainPage">
      <Header/>
      <Slider/>
      <EmptyLine/>
      <Categories/>
      <EmptyLine/>
      <CardsBlock4x/>
      <EmptyLine/>
      <MainInfo/>
      <WarningBlock/>
      <Footer/>
    </div>
  )
}

export default MainPage