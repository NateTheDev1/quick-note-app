import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    );
  }
}

export default App;
