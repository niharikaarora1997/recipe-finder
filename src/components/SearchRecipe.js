import React, { Component } from "react";
import { connect } from "react-redux";
import { setRecipes } from "../actions";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

class SearchRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: "",
      dish: ""
    };
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://recipepuppy.com/api/?i=${ingredients}&q=${dish}`;
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(json => {
        this.props.setRecipes(json.results);
      });
  }

  render() {
    return (
      <Form inline>
        <FormGroup>
          <ControlLabel>Ingredients</ControlLabel>{" "}
          <FormControl
            type="text"
            value={this.state.ingredients}
            name="ingrdients"
            placeholder="platain, oil, salt"
            onChange={e => this.setState({ ingredients: e.target.value })}
          />{" "}
        </FormGroup>{" "}
        <FormGroup>
          <ControlLabel>Dish</ControlLabel>{" "}
          <FormControl
            type="text"
            value={this.state.dish}
            name="ingrdients"
            placeholder="dodo"
            onChange={e => this.setState({ dish: e.target.value })}
          />
        </FormGroup>{" "}
        <Button onClick={() => this.search()}>Submit</Button>
      </Form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipe);
