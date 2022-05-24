import logo from './42Recordings_Logo_Black+Transparent-01.png';
import './App.css';
import Particles from './components/Particles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://particles.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          tsParticles
        </a> */}
      </header>
      <Particles id="tsparticles" />
    </div>
  );
}

export default App;
