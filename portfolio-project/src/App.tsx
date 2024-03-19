import Layout from './pages/Layout';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects';

function App() {

  return (
    <>
      <Layout>
        <Header></Header>
        <AboutMe></AboutMe>
        <br></br>
        <Projects></Projects>
      </Layout>
    </>
  )
}

export default App
