
import  ThemeToggle  from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from "../components/SkillsSection"
import ProjectSection from "../components/ProjectSection"
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


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
     <AboutSection/>
     <SkillsSection/>
     <ProjectSection/>
     <ContactSection />
</main>

{/* Footer */}
<Footer/>

    </div>
  )
}

export default Home