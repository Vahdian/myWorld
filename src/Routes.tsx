import React from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainPage from './pages/mainpage/MainPage'

export default function Routes() {
  return (
    <>
    <Router>
        <Switch>
            <Route exact path="/">
                <MainPage></MainPage>
            </Route>
        </Switch>
    </Router>
    </>
  )
}
