import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

//pages
import Login from "../pages/Login";
import Productos from '../pages/productos'
import NuevoProducto from '../pages/NuevoProducto'


// Components

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/productos" component={Productos} />
      <Route exact path="/nuevo-producto" component={NuevoProducto} />
    </Switch>
    
  </BrowserRouter>
);

export default Routes;
