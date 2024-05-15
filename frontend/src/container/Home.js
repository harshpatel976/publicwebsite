import React from 'react'

import About from './containerpart/homeabout/About'
import Homesections2 from './containerpart/homesection2/Homesections2'
import Homesection1 from './containerpart/homesection1/Homesection1'
import Homemain from './containerpart/homemain/Homemain'
import Review from './containerpart/homereview/Review'




const Home = () => {
  return (
    <div>
    
    <Homesection1/>
    <About/>
    <Homesections2/>
    <Review/>
    
    
    </div>
  )
}

export default Home
