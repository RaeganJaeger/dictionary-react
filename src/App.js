import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary.<span className="random-word">Groovy</span>
        </h1>
        <main>
          <Dictionary defaultKeyword="groovy" />
        </main>
        <p className="footer">
          Opensource code by{" "}
          <a
            href="https://github.com/RaeganJaeger/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Raegan Jaeger
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
