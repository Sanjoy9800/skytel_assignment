import "./App.css";
import MultiselectDropdown from "./components/MultiselectDropdown";

function App() {
  return (
    <div className="App">
      <h1>Dropdown Multiselect App</h1>
      <MultiselectDropdown value={["1", "2"]} readonly={false} /> {/*send the pre seleted value via props*/}
    </div>
  );
}

export default App;
