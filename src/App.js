import logo from './logo.svg';
import './App.css';
// import { ReactLocation, Router } from 'react-location';


function Content({title = 'test', count, add}) {
  const url = window.location.href;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{title} - {count}</code> and save to reload.
        </p>
        <p>URL = {url}</p>
        <button onClick={add}>Conta</button>
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
  )
}

//  const location = new ReactLocation()

function App({...props}) {
  return (
    <Content {...props} />
  );
}

export default App;
