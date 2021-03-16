import logo from "./logo.svg";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div>
      <ul className="nav">
        <ListItem text="Hello." />
        <ListItem text="Work." />
        <ListItem text="About." />
        <ListItem text="Careers." />
        <ListItem text="Contact." />
      </ul>
    </div>
  );
}

export default App;
