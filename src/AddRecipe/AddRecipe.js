import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import config from '../config';
import Nav from '../Nav/Nav';

export default class AddRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toLogin: false,
            name: "",
            preptime: [],
            waittime: [],
            cooktime: [],
            servings: [],
            comments: "",
            calories: "",
            fat: [],
            satfat: [],
            carbs: [],
            fiber: [], 
            sugar: [],
            protein: [],
            instructions: [],
            ingredients: [],
            tags: [],

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addIngredient = this.addIngredient.bind(this);
        this.addInstruction = this.addInstruction.bind(this);
        this.addTag = this.addTag.bind(this);
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
    }
    
    handleSubmit(e) {
        e.preventDefault();
        let data = this.state;
        fetch(`${config.API_ENDPOINT}/api/recipes`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            credentials: 'include',
            body: JSON.stringify(data)
        })
    }
    addIngredient(e) {
        e.preventDefault();
        let targetCon=document.getElementById('ingredients');
        targetCon.insertAdjacentHTML('beforeend', '<input class="recInput" id="recIngredients" value={""} onChange={(e) => this.setState({ingredients: [...this.state.ingredients, String(e.target.value())]})} required></input>')
    }
    addInstruction(e) {
        e.preventDefault();
        let targetCon=document.getElementById('instructions');
        targetCon.insertAdjacentHTML('beforeend', '<input class="recInput" value={""} onChange={(e) => this.setState({instructions: [...this.state.instructions, String(e.target.value())]})} required></input>')
    }
    addTag(e) {
        e.preventDefault();
        let targetCon=document.getElementById('tags');
        targetCon.insertAdjacentHTML('beforeend', '<input class="recInput" value={""} onChange={(e) => this.setState({tags: [...this.state.tags, String(e.target.value())]})} required></input>')
    }

    render() {
        if (this.state.toLogin === true) {
            return <Redirect to='/login' />;
          }
        return (
            <div>
                <Nav></Nav>
                <main id="addRecipeMain">
                    <form id="addRecipeForm" action="" onSubmit={(e) => this.handleSubmit(e)}> 
                        {/* name */}
                        <label htmlFor="recName">Recipe Name</label>
                        <input class="recInput" id="recName" value={this.state.name} onChange={(e) => this.setState({name: e.target.value()})}required></input>
                        {/* preptime */}
                        <label htmlFor="recPrep">Recipe Prep Time</label>
                        <input class="recInput" id="recPrep" value={this.state.preptime} onChange={(e) => this.setState({preptime: e.target.value()})}></input>
                        {/* waittime */}
                        <label htmlFor="recWait">Recipe Wait Time</label>
                        <input class="recInput" id="recWait" value={this.state.waittime} onChange={(e) => this.setState({waittime: e.target.value()})}></input>
                        {/* cooktime */}
                        <label htmlFor="recCook">Recipe Cook Time</label>
                        <input class="recInput" id="recCook" value={this.state.cooktime} onChange={(e) => this.setState({cooktime: e.target.value()})}></input>
                        {/* servings */}
                        <label htmlFor="recServings">Recipe Servings</label>
                        <input class="recInput" id="recServings" value={this.state.servings} onChange={(e) => this.setState({servings: Num(e.target.value())})}></input>
                        {/* comments */}
                        <label htmlFor="recComments">Recipe Comments</label>
                        <input class="recInput" id="recComments" value={this.state.comments} onChange={(e) => this.setState({comments: e.target.value()})}></input>
                        {/* calories */}
                        <label htmlFor="recCalories">Recipe Calories</label>
                        <input class="recInput" id="recCalories" value={this.state.calories} onChange={(e) => this.setState({calories: Num(e.target.value())})}></input>
                        {/* fat */}
                        <label htmlFor="recFat">Recipe Fat</label>
                        <input class="recInput" id="recFat" value={this.state.fat} onChange={(e) => this.setState({fat: Num(e.target.value())})}></input>
                        {/* satfat */}
                        <label htmlFor="recSatFat">Recipe Saturated Fat</label>
                        <input class="recInput" id="recSatFat" value={this.state.satfat} onChange={(e) => this.setState({satfat: Num(e.target.value())})}></input>
                        {/* carbs */}
                        <label htmlFor="recCarbs">Recipe Carbs</label>
                        <input class="recInput" id="recCarbs" value={this.state.carbs} onChange={(e) => this.setState({carbs: Num(e.target.value())})}></input>
                        {/* fiber */}
                        <label htmlFor="recFiber">Recipe Fiber</label>
                        <input class="recInput" id="recFiber" value={this.state.fiber} onChange={(e) => this.setState({fiber: Num(e.target.value())})}></input>
                        {/* sugar */}
                        <label htmlFor="recSugar">Recipe Sugar</label>
                        <input class="recInput" id="recSugar" value={this.state.sugar} onChange={(e) => this.setState({sugar: Num(e.target.value())})}></input>
                        {/* protein */}
                        <label htmlFor="recProtein">Recipe Protein</label>
                        <input class="recInput" id="recProtein" value={this.state.protein} onChange={(e) => this.setState({protein: Num(e.target.value())})}></input>
                        {/* instructions */}
                        <section id="instructions">
                            <button onclick={this.addInstruction}>add a step</button>
                            <input class="recInput" value={this.state.instructions} onChange={(e) => this.setState({instructions: [e.target.value()]})} required></input>
                        </section>
                        {/* ingredients */}
                        <section id="ingredients">
                            <button class="add" onclick={this.addIngredient}>add an ingredient</button>
                            <input class="recInput" value={this.state.ingredients} onChange={(e) => this.setState({ingredients: [e.target.value()]})} required></input>
                        </section>
                        {/* tags */}
                        <section id="tags">
                            <button class="add" onclick={this.addTag}>add a tag</button>
                            <input class="recInput" value={this.state.tags} onChange={(e) => this.setState({tags: [e.target.value()]})} required></input>
                        </section>
                        <button>submit</button>
                    </form>
                </main>
            </div>
        )
    }

}