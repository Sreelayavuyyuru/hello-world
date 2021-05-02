import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Laya";
  const isLoggedIn = false;
  // const elements = [] 
  // const items = []
  // for (const [index, value] of elements.entries()){" "}
  //       {items.push(<Element key={index} />)}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hello World! </p>
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

// true && some expresion will return the expression.
