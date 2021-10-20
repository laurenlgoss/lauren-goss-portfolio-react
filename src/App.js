import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProjectsContainer from './components/ProjectsContainer';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Header />
        <AboutMe />
        <ProjectsContainer />
        <Contact />
      </main>

      <footer>
          <Footer />
      </footer>
    </>
  );
}

export default App;
