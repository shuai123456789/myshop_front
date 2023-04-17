import logo from './logo.svg';
import './App.css';
import Zhuye from './Zhuye.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <zhuye/>
        <p>
          <Zhuye/>
          Edit <code>src/App.js</code> and save to reload.
          王帅众123
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
