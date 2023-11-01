import { Navbar } from "./components/navbar";
import Home from './components/home'
import About from "./components/about";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;