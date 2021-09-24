import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Index } from '../pages/Index';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </div>
    </>
  )
}
