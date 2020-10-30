import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import DogList from './DogList'
import FilterDogs from './FilterDogs'

export function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/dogs" >
        <DogList dogs={dogs}/>
      </Route>
      <Route path="/dogs/:name" >
        <FilterDogs dogs={dogs}/>
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  )
}

export default Routes