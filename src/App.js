import './App.css';

import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <span className="react-logo">
            <span className="nucleo"></span>
          </span>
        </div>
        <p>
          Version 2
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
