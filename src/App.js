import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  var words = [
    "rainbow",
    "groovy",
    "goat",
    "justice",
    "art",
    "sunset",
    "lilac",
    "poppy",
    "curious",
    "frog",
    "moss",
    "yam",
    "bees",
    "mullet",
    "sequoia",
    "radish",
    "ponder",
    "inspire",
    "discover",
    "goose",
  ];
  var randomWords = words[Math.floor(Math.random() * words.length)];

  return (
    <div className="App">
      <div className="container">
        <h1>
          Dictionary.<span className="random-word">{randomWords}</span>
        </h1>
        <main>
          <Dictionary defaultKeyword={randomWords} />
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
