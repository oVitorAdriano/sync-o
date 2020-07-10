import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <div children="Home" />} />
    </Switch>
  )
}

export default Routes
