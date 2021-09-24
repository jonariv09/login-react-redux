import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Screener } from '../components/Screener/Screener';
import { DashboardRoutes } from './Dashboard';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route exact path="/screener" component={Screener} />
            <Route exact path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  )
}
