import { Navbar } from "./components/navbar";
import Home from './components/home'
import About from "./components/about";
import Skills from "./components/skills";
import Works from "./components/work";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;