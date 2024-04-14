import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Government from "./Government";
import Game from "./Game";
import Verify from "./Verify";
import User from "./User";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route key={1} path="/government" element={<Government />} />
          <Route key={2} path="/gameregister" element={<Game />} />
          <Route key={3} path="/verify" element={<Verify />} />
          <Route key={4} path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
