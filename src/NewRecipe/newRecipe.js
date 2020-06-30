import React from 'react'
import { Link } from 'react-router-dom'
import config from '../config'
import ApiContext from '../ApiContext'

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
        let keys= Object.keys(this.state.names)
        let randomNumber = Math.floor(Math.random() * (keys.length)) + 1;
        let randomString = String(randomNumber)
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
            <div>
                <h1>Your New Recipe!</h1>
                <h2>Name: {this.state.recipe.name}</h2>
                <h2>Servings: {this.state.recipe.servings}</h2>
                <h2>Ingredients:</h2>
                <ul>
                    {
                        ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient} </li>
                        ))
                    }

                </ul>
                <h2>Cooking Instructions:</h2>
                <ul>
                    {
                        instructions.map((instructions, i) => (
                            <li key={i}>{instructions}</li>
                        ))
                    }
                </ul>
                <h2>Notes:</h2>
                <p>{this.state.recipe.comments}</p>
                <h2>Nutritional Information:</h2>
                <ul>
                    <li>Calories: {this.state.recipe.calories}</li>
                    <li>Fat: {this.state.recipe.fat}</li>
                    <li>Saturated Fat: {this.state.recipe.satfat}</li>
                    <li>Carbs: {this.state.recipe.carbs}</li>
                    <li>Fiber: {this.state.recipe.fiber}</li>
                    <li>Sugar: {this.state.recipe.sugar}</li>
                    <li>Protein: {this.state.recipe.protein}</li>
                </ul>
                <button onClick={this.getNewRecipe}>Get A New Recipe!</button>

                <Link to="/">Go Back</Link>
            </div>
        )
    }

}