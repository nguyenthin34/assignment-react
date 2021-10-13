import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product";
import Add from "./add";
import Edit from "./edit";
import Home from "./home";
import Detail from "./detail";
import Signup from "./page/signup";
import Signin from "./page/Signin";
import Details from "./details";
export default function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Signin />
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product {...props} />
        </Route>
        <Route path="/product/add">
          <Add onAdd={props.onAdd} />
        </Route>
        <Route path="/product/edit/:id">
          <Edit onUpdate={props.onUpdate} />
        </Route>
        <Route path="/product/detail/:id" exact>
          <Detail />
        </Route>
        <Route path="/product/details/:id">
          <Details />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}
