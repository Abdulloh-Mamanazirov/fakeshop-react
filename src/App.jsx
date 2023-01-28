import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { HashLink } from "react-router-hash-link";

function App() {
  return (
    <div>
      State + Props
      <Link to={"/"}>Home</Link>
      <HashLink to={"/about#id"}>About</HashLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
