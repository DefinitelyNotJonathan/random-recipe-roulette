import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
export default class HomeNav extends React.Component {
   
    componentDidMount(){
     console.log('HomeNav did mount')
     console.log('this.props.name')
     console.log(this.props.name)   
    }

    render(){
        return(
            <div>
                <nav>
                    <h2>Welcome {this.props.name}!</h2>
                    <Link to="/login">LOGOUT</Link>
                </nav>
            </div>
        )
    }
}