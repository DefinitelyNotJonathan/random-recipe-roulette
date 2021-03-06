import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import HomePage from './HomePage/Homepage';
import NewRecipe from './NewRecipe/newRecipe';
import AddRecipe from './AddRecipe/AddRecipe';
import ApiContext from './ApiContext';
import config from './config';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      ingredients: []
    };
  }

  renderMainRoutes() {
    return (
      <Route>
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/newrecipe" component={NewRecipe}/>
        <Route path="/addrecipe" component={AddRecipe}/>
      </Route>
    );
  }

  render(){
    const value = {
      user: this.state.user,
      setUser:(user) => {
        this.setState({ user: user});
      },
      ingredients: this.state.ingredients,
      setIngredients:(ingredients) => {
        this.setState({ ingredients: ingredients});
      }
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <header className="App_header">
          </header>
          <ErrorBoundary errorMessage='could not display MainRoutes'>
            <main className="App__main">{this.renderMainRoutes()}
            </main>
          </ErrorBoundary>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
