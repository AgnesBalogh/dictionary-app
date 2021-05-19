
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        
      <main>
        <Dictionary defaultKeyword="something" />
      </main>
      <footer className="App-footer"><small>Open-source Code by Agnes Balogh on <a href="https://github.com/AgnesBalogh/dictionary-app" target="_blank" rel="noreferrer">GitHub</a></small></footer>
      </header>
      </div>
    </div>
  );
}


