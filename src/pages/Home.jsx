import React from 'react'
import  ThemeToggle  from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
const Home = () => {
  return (
    <div className='min-h-screen'>
{/* {theme} */}
<ThemeToggle/>
{/* {background effects} */}

<StarBackground />

{/* Navbar */}
<NavBar/>

{/* Main content */}

<main>

     <HeroSection />
</main>

{/* Footer */}

    </div>
  )
}

export default Home