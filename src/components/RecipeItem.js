import React, { Component } from "react";
import { connect } from "react-redux";
import { favoriteRecipe } from "../actions";

class RecipeItem extends Component {
  state = {
    favorited: false
  };

  favorite(recipe) {
    this.props.favoriteRecipe(recipe);
    this.setState({ favorited: true });
  }

  render() {
    const { title, href, ingredients, thumbnail } = this.props.recipe;
    return (
      <div className="recipe-item">
        {this.props.favoriteButton ? (
          this.state.favorited ? (
            <div className="star favorited">&#9733;</div>
          ) : (
            <div
              className="star"
              onClick={() => {
                this.favorite(this.props.recipe);
              }}
            >
              &#9734;
            </div>
          )
        ) : null}
        <div className="recipe-title">
          <a href={href} target="_blank">
            <h4>{title}</h4>
          </a>
          <p className="recipe-text">{ingredients}</p>
        </div>
        <img src={thumbnail} alt={title} className="recipe-img" />
      </div>
    );
  }
}
export default connect(null, { favoriteRecipe })(RecipeItem);
