import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from "./RecipeItem";
import Nav from "./Nav";
class FavoriteRecipeList extends Component {
  state = {};

  render() {
    if (this.props.favoriteRecipes.length > 0) {
      return (
        <div>
          <Nav />
          {this.props.favoriteRecipes.map((recipe, i) => {
            return <RecipeItem recipe={recipe} key={i} />;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <h4 className="text-center">No favorited item</h4>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);
