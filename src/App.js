import './output.css';
import Api from "./components/api";
import Hero from './components/hero';

function App() {
  return (
    <div className="App relative">
      <Hero />
      <Api />
    </div>
  );
}

export default App;
