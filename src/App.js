import { useState } from "react";

const oders = [100, 200, 300]

function App() {

  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(preStare => preStare + 1);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
