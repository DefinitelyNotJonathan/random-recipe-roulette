import React from 'react'
import HomeNav from '../HomeNav/HomeNav'

export default class Login extends React.Component {

    componentDidMount(){
     console.log('HomePage did mount')   
    }

    render(){
        return(
            <div>
                <HomeNav></HomeNav>
                <h2>Your Saved Recipes:</h2>
                <ul>
                    <li>Burnt Salad</li>
                    <li>Glass of Water</li>
                    <li>Bowl of Cereal</li>
                    <li>Raw Toast</li>
                </ul>
                <h2>Get A New Recipe!!!</h2>
                <button>Go!</button>
            </div>
        )
    }
}