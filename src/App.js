import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Home";
import Register from "./pages/Register";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    );
  }
}

export default App;
