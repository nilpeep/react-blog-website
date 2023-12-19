import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  Routes,
} from "react-router-dom";
import Switch from "react-switch";
import PageRenderer from "./page-renderer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/:page" element={PageRenderer} />
          <Route
            path="/"
            element={() => <useNavigate to="/home"></useNavigate>}
          />
          <Route element={() => 404} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
