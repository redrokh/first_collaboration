
import ComponentTest from './components/ComponentTest';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div>Hello</div>
      <ComponentTest test="ça marche" />
      <Counter />
    </div>
  );
}

export default App;
