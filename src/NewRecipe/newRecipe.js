import React from 'react'
import { Link } from 'react-router-dom'

export default class NewRecipe extends React.Component{

    componentDidMount(){
        console.log('NewRecipe did mount');
    }

    render(){
        return(
            <div>
                <h1>Your New Recipe!</h1>
                <h2>Name: Baked Shrimp Scampi</h2>
                <h2>Ingredients:</h2>
                <ul>
                    <li>2/3 cup panko</li>
                    <li>1/4 teaspoon red pepper flakes</li>
                    <li>1/2 lemon, zested and juiced</li>
                    <li>1 extra-large egg yolk</li>
                    <li>1 teaspoon rosemary, minced</li>
                    <li>3 tablespoon parsely, minced</li>
                    <li>4 cloves garlic, minced</li>
                    <li>1/4 cup shallots, minced</li>
                    <li>8 tablespoon unsalted butter, at room temperature</li>
                    <li>2 tablespoon dry white wine</li>
                    <li>Freshly ground black pepper</li>
                    <li>Kosher salt</li>
                    <li>3 tablespoon olive oil</li>
                    <li>2 pounds frozen shrimp</li>
                </ul>
                <h2>Cooking Instructions:</h2>
                <ul>
                    <li>
                    Preheat the oven to 425 degrees F.
                    </li>
                    <li>
                    Defrost shrimp by putting in cold water, drain. Place the shrimp in serving dish (9x13 or 2 quart casserole) and toss gently with the olive oil, wine, 1 teaspoons salt, and 1 teaspoon pepper. Allow to sit at room temperature while you make the butter and garlic mixture.
                    </li>
                    <li>
                    In a small bowl, mash the softened butter with the garlic, shallots, parsley, rosemary, red pepper flakes, lemon zest, lemon juice, egg yolk, panko, 1\/2 teaspoon salt, and 1\/4 teaspoon of pepper until combined.
                    </li>
                    <li>
                    Spread the butter mixture evenly over the shrimp. Bake for 10 to 12 minutes until hot and bubbly. If you like the top browned, place under a broiler for 1-3 minutes (keep an eye on it). Serve with lemon wedges and French bread.
                    </li>
                </ul>
                <h2>Notes:</h2>
                <p>If using fresh shrimp, arrange for presentation. Starting from the outer edge of a 14-inch oval gratin dish, arrange the shrimp in a single layer cut side down with the tails curling up and towards the center of the dish. Pour the remaining marinade over the shrimp.</p>
                <Link to="/HomePage">Go Back</Link>
            </div>
        )
    }

}