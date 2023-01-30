import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import More from "./Pages/More";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/more/:itemId" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
