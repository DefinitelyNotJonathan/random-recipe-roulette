import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import config from '../config';
import ApiContext from '../ApiContext';
import Nav from '../Nav/Nav';

export default class NewRecipe extends React.Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
        this.state = {
            toLogin: false,
            names: {},
            recipe: {
                id: null,
                name: null,
                source: null,
                preptime: null,
                waittime: null,
                cooktime: null,
                servings: null,
                comments: null,
                calories: null,
                carbs: null,
                fat: null,
                fiber: null,
                ingredients: [],
                instructions: [],
                protein: null,
                satfat: null,
                sugar: null,
                tags: null,
            },
            comment: true,
        };
        this.getNewRecipe = this.getNewRecipe.bind(this);
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/recipes/names`, {
            credentials: 'include',
          })
        .then((response) => {
            if (response.status === 403) {
                this.setState({
                    toLogin: true,
                });
            } else { return response.json(); }
        })
            // .then(res => res.json()) 
        .then((data) => {
            this.setState({
                names: data,
            });
            this.getNewRecipe();   
        }); 
    }

    getNewRecipe(e) {
        let keys = Object.keys(this.state.names);
        let randomNumber = Math.floor(Math.random() * (keys.length)) + 1;
        let randomString = String(randomNumber);
        fetch(`${config.API_ENDPOINT}/api/recipes/random/` + randomString, {
            credentials: 'include',
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.ingredients) {
                data.ingredients = this.prepIngredients(data.ingredients);
            }
            if (data.instructions) {
                data.instructions = this.prepInstructions(data.instructions);
            }
            this.setState({
                recipe: data,
            });
            window.scrollTo(0,0);
            if (this.state.recipe.comments == false ) {
                this.setState({
                    comment: false
                });
            } else {
                this.setState({
                comment: true
                });
            }
        });
    }

    prepIngredients(input) {
        return input.split('--');
    }

    prepInstructions(input) {
        return input.split('\r\n\r\n');
    }

    render() {
        let ingredients = this.state.recipe.ingredients;
        let instructions = this.state.recipe.instructions;
        if (this.state.toLogin === true) {
            return <Redirect to="/login"/>;
        }
        return(
            <div className="Page_Container">
                <header>
                    <Nav className="NewRecipe_Nav" />
                </header>
                <div className="NewRecipe_Container">
                    <h1 className="NewRecipe_Header Name">{this.state.recipe.name}</h1>
                    <h2 className="NewRecipe_Header Servings">Servings:</h2>
                    <h2 className="NewRecipe_Servings"> {this.state.recipe.servings}</h2>
                    <h2 className="NewRecipe_Header Ingredients">Ingredients:</h2>
                    <ul className="NewRecipe_Ingredients_UL">
                        {
                            ingredients.map((ingredient, i) => (
                                <li key={i} className="NewRecipe_LI">{ingredient} </li>
                            ))
                        }
                    </ul>
                    <h2 className="NewRecipe_Header Instructions">Cooking Instructions:</h2>
                    <ul className="NewRecipe_Instructions_UL">
                        {
                            instructions.map((instruction, i) => (
                                <li key={i} className="NewRecipe_LI">{instruction}</li>
                            ))
                        }
                    </ul>
                    <h2 className={`NewRecipe_Header ${this.state.comment ? "" : "hidden"}`}>Notes:</h2>
                    <p className={`NewRecipe_Comments ${this.state.comment ? "" : "hidden"}`}>{this.state.recipe.comments}</p>
                    <h2 className="NewRecipe_Header Nutritional_Facts">Nutritional Information:</h2>
                    <ul className="NewRecipe_Nutritional_Facts_UL">
                        <li className="NewRecipe_LI Calories">Calories: {this.state.recipe.calories}</li>
                        <li className="NewRecipe_LI Fat">Fat: {this.state.recipe.fat}</li>
                        <li className="NewRecipe_LI SatFat">Saturated Fat: {this.state.recipe.satfat}</li>
                        <li className="NewRecipe_LI Carbs">Carbs: {this.state.recipe.carbs}</li>
                        <li className="NewRecipe_LI Fiber">Fiber: {this.state.recipe.fiber}</li>
                        <li className="NewRecipe_LI Sugar">Sugar: {this.state.recipe.sugar}</li>
                        <li className="NewRecipe_LI Protein">Protein: {this.state.recipe.protein}</li>
                    </ul>
                    <div className="NewRecipe_Button_Container">
                        <button type="button" onClick={this.getNewRecipe} className="NewRecipe_Button">Get A New Recipe!</button>
                        <Link to="/" className="button">Go Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
