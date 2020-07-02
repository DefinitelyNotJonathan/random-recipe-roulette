import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import LogoutButton from '../LogoutButton'

export default class HomeNav extends React.Component {
   
    componentDidMount(){
     console.log('HomeNav did mount')
     console.log('this.props.name')
     console.log(this.props.name)   
    }

    render(){
        return(
            <div className="HomeNav_Container">
                <nav>
                    <h2 className="HomeNav_Header">Welcome {this.props.name}!</h2>
                    <LogoutButton></LogoutButton>
                </nav>
            </div>
        )
    }
}