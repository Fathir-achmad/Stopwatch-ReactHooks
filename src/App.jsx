import { useState } from "react";
import Stopwatch from "./stopwatch";
function App() {
  const [number,setNumber] = useState(0)

  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;
