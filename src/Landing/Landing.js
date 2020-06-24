import React from 'react'
import { Link } from 'react-router-dom'

export default class Landing extends React.Component{

    componentDidMount(){
        console.log('Landing did mount')
    }

    render(){
        return(
            <div>
                <h2>Welcome to Random Recipes - The Static Version!</h2>
                <Link to="/login">Let's Go!</Link>
            </div>
        )
    }

}