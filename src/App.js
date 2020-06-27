import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Landing from './Landing/Landing'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import HomePage from './HomePage/Homepage'
import NewRecipe from './NewRecipe/newRecipe'

class App extends Component {

  renderMainRoutes() {
    return (
      <Route>
        <Route exact path="/" component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/homepage" component={HomePage}/>
        <Route path="/newrecipe" component={NewRecipe}/>
      </Route>
    )
  }

  render(){
    return(
      <div>
        <header>
          <h1>
            Random Recipes!
          </h1>
        </header>
        <ErrorBoundary>
          <main>{this.renderMainRoutes()}</main>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;