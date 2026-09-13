import React, { useEffect, useState } from 'react'

import Aboutme from './components/Aboutme'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Partner from './components/Partner'
import Section from './components/Section'
import Systems from './components/Systems'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const startTime = Date.now()

    // Minimum amount of time the loading screen will show
    const minimumLoadingTime = 5000

    const handlePageLoad = () => {
      const elapsedTime = Date.now() - startTime

      const remainingTime = Math.max(
        minimumLoadingTime - elapsedTime,
        0
      )

      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }

    // If everything is already loaded
    if (document.readyState === 'complete') {
      handlePageLoad()
    } else {
      window.addEventListener('load', handlePageLoad)
    }

    return () => {
      window.removeEventListener('load', handlePageLoad)
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="bg-[#1a1a1a]">
      <Navbar />
      <Main />
      <Partner />
      <Aboutme />
      <Section />
      <Systems />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App