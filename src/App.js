import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary App</h1>
        <main>
          <Dictionary />
        </main>
        <p className="footer">
          Opensource code by{" "}
          <a
            href="https://github.com/RaeganJaeger/weather-react"
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
