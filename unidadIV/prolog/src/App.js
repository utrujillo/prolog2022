import logo from './logo.svg';
import Hello from './components/Hello/hello';
import './App.css';

function App() {
  return (
    <div className="App">
      Hola mundo
      <Hello text="Hola" />
      <Hello text="Hola segundo" />
      <Hello text="Hola mundo desde Hello" />
      {/* <Hello /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
      </header> */}
    </div>
  );
}

export default App;
