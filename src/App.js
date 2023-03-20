import './output.css';
import Header from "./components/header"
import Api from "./components/api"
import Test from './components/test';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
    <Hero />
      <Header />
      <Api />
      <Test />
    </div>
  );
}

export default App;
