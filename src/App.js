import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
// import { ReactLocation, Router } from 'react-location';


// function Content({title = 'test', count, add}) {
//   console.log(count)
//   const [innerCount, setInnerCount] = useState(0);
//   const url = window.location.href;
//   const innerAdd = () => {
//     setInnerCount(oldState => oldState + 1);
//   }
//   useEffect(()=>{
//     console.log('oi?')
//     setInnerCount(count);
//   },[count])
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>{title} - {count} - {innerCount}</code> and save to reload.
//         </p>
//         <p>URL = {url}</p>
//         <button onClick={add}>Conta</button>
//         <button onClick={innerAdd}>Conta interna</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

//  const location = new ReactLocation()
 
const empty = () => {}

 function App({title = 'test', count, add = empty, activateToast = empty}) {
  // console.log("🚀 ~ props", props)
  // const routes = [
  //   { 
  //     path: '/*', 
  //     element: <Content {...props} />, 
  //     children: 
  //       { 
  //         path: '*', element: <Content {...props} /> 
  //       } 
  //   },
  // ]
  useEffect(()=>{console.log(count)}, [count])
  const [innerCount, setInnerCount] = useState(0);
  const url = window.location.href;
  const innerAdd = () => {
    setInnerCount(oldState => oldState + 1);
  }
  const showWarning = () => {
    activateToast('Deu bom')
  }
  return (
    // <Router location={location} routes={routes} />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{title} - {count} - {innerCount}</code> and save to reload.
        </p>
        <p>URL = {url}</p>
        <button onClick={showWarning}>Ativar toast</button>
        <button onClick={add}>Conta</button>
        <button onClick={innerAdd}>Conta interna</button>
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
