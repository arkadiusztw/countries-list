import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Countries from "./views/CountriesModule";
import CountriesDetails from "./views/CountriesDetails";
const App = () => {
  let location = useLocation();
  return (
    <div className="app">
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="anim" timeout={600}>
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route path="/details">
              <CountriesDetails />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
