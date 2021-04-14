import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Recipe List</h3>

        {this.props.recipes.map((recipe, i) => {
          return <RecipeItem key={i} recipe={recipe} favoriteButton />
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

export default connect(mapStateToProps, null)(RecipeList);
