import './App.css';
import Layout from './pages/Layout';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Layout>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <br></br>
        <Projects></Projects>
      </Layout>
    </>
  )
}

export default App
