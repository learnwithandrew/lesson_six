import logo from "./logo.svg";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import PizzaListItem from "./components/PizzaListItem";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Welcome to Pizzeria App</h1>
      <AddPizzaForm />
      <PizzaListItem />
    </div>
  );
}

export default App;
