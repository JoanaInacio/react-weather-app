import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-title">Weather App</h1>
      <Weather defaultCity="Lisbon" />
      <footer className="app-footer">
        This project was coded by Joana Inácio and is{" "}
        <a href="https://github.com/JoanaInacio/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a>{" "}
        and{" "}
        <a href="https://react-weather-app-joana-inacio.netlify.app/" target="_blank" rel="noreferrer">hosted on Netlify</a>
      </footer>
    </div>
  );
}