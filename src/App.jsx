import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import HeroBanner from './Components/HeroBanner/HeroBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <Header></Header>
        <div>
          <HeroBanner></HeroBanner>
        </div>

      </section>
    </>
  )
}

export default App
