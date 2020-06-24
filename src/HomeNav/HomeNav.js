import React from 'react'
import { Link } from 'react-router-dom'

export default class HomeNav extends React.Component {

    componentDidMount(){
     console.log('HomeNav did mount')   
    }

    render(){
        return(
            <div>
                <nav>
                    <h2>Welcome User!</h2>
                    <Link to="/login">LOGOUT</Link>
                </nav>
            </div>
        )
    }
}