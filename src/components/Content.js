import React from "react";
import { Route, Switch } from "react-router-dom";
import Words from "./inicio/Words";
import Breeds from "./breeds/Breeds";
import SubBreeds from "./breeds/SubBreeds";
import Demo from "./breeds/ClientesAnt";

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Words} />
      <Route exact path="/table" component={Demo}/>
      <Route exact path="/breeds/:id" component={Breeds}/>
      <Route exact path="/breeds/:id/:breed" component={SubBreeds}/>
    </Switch>
  );
}

export default Content;
