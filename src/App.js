import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-title">Weather App</h1>
      <Weather defaultCity="Lisbon" />

      <footer className="app-footer">
        
          href="https://github.com/JoanaInacio/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code on GitHub
        </a>
        , coded by Joana Inácio
      </footer>
    </div>
  );
}