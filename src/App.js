/* Components */
import Header from "./components/Header";
import Counter from "./components/Counter";
import Quote from "./components/Quote";

/* Redux */
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="App container mx-auto px-4">
      <Header />
      <Counter />
      <Quote />
    </div>
  );
}

export default App;
