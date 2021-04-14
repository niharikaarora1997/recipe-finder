import React, { Component } from "react";
import SearchRecipe from "./SearchRecipe";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RecipeList from "./RecipeList";
import FavoriteRecipeList from "./FavotiteRecipeList";
import Nav from './Nav'
const Home = () => (
  <div>
    <Nav />
    <SearchRecipe />
    <RecipeList />
  </div>
);

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Recipe Finder</h2>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favorites" component={FavoriteRecipeList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
