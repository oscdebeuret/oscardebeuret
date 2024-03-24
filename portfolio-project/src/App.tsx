import './App.css';
import Layout from './pages/Layout';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  return (
    <>
      <Layout>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Skills></Skills>
      </Layout>
    </>
  )
}

export default App
