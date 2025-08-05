import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import NoseClip from './Components/NoseClip/NoseClip'
import Solution from './Components/Solution/Solution'
import RealResult from './Components/RealResult/RealResult'
import Footer from './Components/Footer/Footer'
import Customer from './Components/Customer/Customer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Header></Header>
        <HeroBanner></HeroBanner>
        <NoseClip></NoseClip>
        <Solution></Solution>
        <RealResult></RealResult>
        <Customer></Customer>
        <Footer></Footer>
      </section>
    </>
  )
}

export default App
