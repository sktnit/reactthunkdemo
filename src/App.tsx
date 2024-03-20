import "./App.css";
import Counter from "./components/Counter";
import { useAppSelector } from "./utils/hook";

function App() {
  const { count } = useAppSelector((state) => state.count);
  return (
    <>
      Hello World
      <Counter />
      count: {count}
    </>
  );
}

export default App;
