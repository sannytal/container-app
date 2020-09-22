import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Product from "./components/Product";
import { getProductPath } from "./components/Util/path";

const App = () => {

  return (
      <Router>
        <Switch>
          <Route path={getProductPath()} component={Product} />
        </Switch>
      </Router>
  );
};

export default App;
