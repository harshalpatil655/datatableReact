import "./App.css";
import CountriesTables from "./Components/CountriesTables";

function App() {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h1>React DataTable</h1>
        <CountriesTables />
      </div>
    </>
  );
}

export default App;
