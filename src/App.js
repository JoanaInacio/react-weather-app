import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1 className="app-title">Weather App</h1>
      <Weather defaultCity="Lisbon" />
    </div>
  );
}