import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ApiContext from '../ApiContext'
import Nav from '../Nav/Nav'

export default class NewRecipe extends React.Component{

    static contextType=ApiContext

    constructor(props){
        super(props)
        this.state={
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
                tags: null
            }
        }
        this.getNewRecipe = this.getNewRecipe.bind(this)
    }

    componentDidMount(){
        console.log('NewRecipe did mount');
        fetch(`${config.API_ENDPOINT}/api/recipes/names`, {
            credentials: 'include'
          })
            .then(response => {
                if (response.status === 403) {
                    this.setState({
                      toLogin: true
                    })
                }
                else{return response.json()}
            })
            // .then(res => res.json()) 
            .then(data => {
                console.log('data')
                console.log(data)
                this.setState({
                    names: data
                })
                console.log('this.state.names[1]')
                console.log(this.state.names)
                this.getNewRecipe();   
            }) 
       
    }

    getNewRecipe(e){
        console.log('getNewRecipe() running')
        let keys= Object.keys(this.state.names)
        let randomNumber = Math.floor(Math.random() * (keys.length)) + 1;
        let randomString = String(randomNumber)
        console.log('CONFIG.API_ENDPOINT')
        console.log(config.API_ENDPOINT)
        fetch(`${config.API_ENDPOINT}/api/recipes/random/` + randomString, {
            credentials:'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log('randomNumber fetch data')
            console.log(data)
            if(data.ingredients){
                data.ingredients=this.prepIngredients(data.ingredients)
            }
            if(data.instructions){
                data.instructions=this.prepInstructions(data.instructions)
            }
            this.setState({
                recipe: data
            })
            console.log('this.state.recipe')
            console.log(this.state.recipe)
        })
    }

    prepIngredients(input){
        return input.split('--')
    }

    prepInstructions(input){
        return input.split('\r\n\r\n')
    }

    render(){

        let ingredients = this.state.recipe.ingredients;
        let instructions = this.state.recipe.instructions;
        console.log(ingredients);
        return(
            <div className="Page_Container">
                <header>
                    <Nav className="NewRecipe_Nav"></Nav>
                </header>

                <div className="NewRecipe_Container">
                    <h1 className="NewRecipe_Header Name">{this.state.recipe.name}</h1>
                    <h2 className="NewRecipe_Header Servings">Servings:</h2>
                    <h2 className="NewRecipe_Servings"> {this.state.recipe.servings}</h2>
                    <h2 className="NewRecipe_Header Ingredients">Ingredients:</h2>
                    <ul className="NewRecipe_Ingredients_UL">
                        {
                            ingredients.map((ingredient, i) => (
                                <li key={i} className="NewRecipe_Ingredients_LI">{ingredient} </li>
                            ))
                        }

                    </ul>
                    <h2 className="NewRecipe_Header Instructions">Cooking Instructions:</h2>
                    <ul className="NewRecipe_Instructions_UL">
                        {
                            instructions.map((instructions, i) => (
                                <li key={i} className="NewRecipe_Instructions_LI">{instructions}</li>
                            ))
                        }
                    </ul>
                    <h2 className="NewRecipe_Header Comments">Notes:</h2>
                    <p className="NewRecipe_Comments">{this.state.recipe.comments}</p>
                    <h2 className="NewRecipe_Header Nutritional_Facts">Nutritional Information:</h2>
                    <ul className="NewRecipe_Nutritional_Facts_UL">
                        <li className="NewRecipe_Nutritional_Facts Calories">Calories: {this.state.recipe.calories}</li>
                        <li className="NewRecipe_Nutritional_Facts Fat">Fat: {this.state.recipe.fat}</li>
                        <li className="NewRecipe_Nutritional_Facts SatFat">Saturated Fat: {this.state.recipe.satfat}</li>
                        <li className="NewRecipe_Nutritional_Facts Carbs">Carbs: {this.state.recipe.carbs}</li>
                        <li className="NewRecipe_Nutritional_Facts Fiber">Fiber: {this.state.recipe.fiber}</li>
                        <li className="NewRecipe_Nutritional_Facts Sugar">Sugar: {this.state.recipe.sugar}</li>
                        <li className="NewRecipe_Nutritional_Facts Protein">Protein: {this.state.recipe.protein}</li>
                    </ul>
                    <div className="NewRecipe_Button_Container">
                        <button onClick={this.getNewRecipe} className="NewRecipe_Button">Get A New Recipe!</button>
                        <Link to="/" className="button">Go Back</Link>
                    </div>
                </div>

            </div>
        )
    }

}