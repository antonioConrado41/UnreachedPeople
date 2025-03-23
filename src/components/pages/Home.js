import React from 'react'
import {Header} from '../Header';
import { UnreachedList } from '../UnreachedList'
import { Footer } from '../Footer'
import '../../App.css'

const Home = () => {
  return (
    <>
          <Header/>
          <UnreachedList/>
          <Footer/>
    </>
  )
}

export default Home;