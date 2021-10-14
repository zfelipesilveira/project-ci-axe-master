import logo from './logo.svg';
import './App.css';
import img from './assets/pic_trulli.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={img} alt="Descrição" width="500" height="333"></img>
        <p>Test</p>
      </header>
    </div>
  );
}

export default App;
