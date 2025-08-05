import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import NoseClip from './Components/NoseClip/NoseClip'
import SolutionOverView from './Components/SolutionOverView/SolutionOverView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Header></Header>
        <HeroBanner></HeroBanner>
        <NoseClip></NoseClip>
        <SolutionOverView></SolutionOverView>

      </section>
    </>
  )
}

export default App
