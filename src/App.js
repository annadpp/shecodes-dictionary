import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">DICTIONARY</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer>Coded by Miumiu</footer>
      </div>
    </div>
  );
}

export default App;
