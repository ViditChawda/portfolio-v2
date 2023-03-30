import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Sidebar from './components/sidebar/Sidebar';
import Experience from './components/experience/Experience';
import Aboutme from './components/aboutme/Aboutme';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <div className="App">
        <Sidebar />
        <div>
          <Hero />
          <Experience />
          <Skills />
          <Aboutme />
        </div>
      </div>

    </div>

  );
}

export default App;
