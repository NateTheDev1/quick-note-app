import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./pages/Header";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    );
  }
}

export default App;
