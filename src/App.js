import React from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Home, Login, Register, Create, Image } from "./sites";
import PrivateRoute from "./auth/PrivateRoute";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <PrivateRoute path='/create' exact component={Create} />
        <Route path='/image/:id' exact component={Image} />
      </Switch>
    </>
  );
};

export default App;
