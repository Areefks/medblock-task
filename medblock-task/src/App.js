import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import List from "./components/List";
import Tree from "./components/Tree";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/list" element={<List />} />
          <Route exact path="/tree" element={<Tree />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
