import { Navbar } from "./components/navbar";
import Home from './components/home'
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
    </div>
  );
}

export default App;