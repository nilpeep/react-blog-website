import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer}></Route>
          <Route
            path="/"
            render={() => <Redirect to="/home"></Redirect>}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
