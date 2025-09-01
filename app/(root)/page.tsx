import ChooseUs from "./components/Choose-us"
import Faq from "./components/faq"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Problem from "./components/Problem"

const LandingPage = () => {
  return (
    <main>
        <Hero/>
        <Problem/>
        <Features/>
        <ChooseUs/>
        <Faq/>
        <Footer/>
    </main>
  )
}

export default LandingPage