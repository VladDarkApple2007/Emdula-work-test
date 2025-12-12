import About from './components/About/About'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import HowWeBuild from './components/HowWeBuild/HowWeBuild'
import Navbar from './components/Navbar/Navbar'
import Partners from './components/Partners/Partners'
import Testimonials from './components/Testimonials/Testimonials'
import WhyTrust from './components/WhyTrust/WhyTrust'
import Works from './components/Works/Works'
import './index.css'

function App() {
  return (
    <div>
      <Navbar/>
      
      <section id="hero">
        <Hero/>
      </section>

      <Partners/>

      <section id="about">
        <About/>
      </section>

      <section id="solutions">
        <Works/>
      </section>

      <section id="how-we-build">
        <HowWeBuild/>
      </section>

      <section id="why-trust">
        <WhyTrust/>
      </section>

      <section id="faq">
        <FAQ/>
      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>

      <section id="contact">
        <Footer/>
      </section>
    </div>
  )
}

export default App