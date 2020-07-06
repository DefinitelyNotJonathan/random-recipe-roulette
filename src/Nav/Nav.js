import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'

export default class HomeNav extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
        this.state = {
            active: false
        }
    }

    componentDidMount(){
     console.log('HomeNav did mount')
     console.log('this.props.name')
     console.log(this.props.name)
     setTimeout(function(){
        this.active = true
        console.log('this.active = true')
     }, 3000)   
    }

    handleLogout() {
        fetch(`${config.API_ENDPOINT}/api/logout`, {
            credentials: 'include',
        })
    }
    render(){
        return(
            <div className={`Nav_Container ${this.state.active ? "active" : ""}`}>
                <h2>{this.state.active}</h2>
                <nav>
                    <ul className="Nav_Menu">
                        <li className="Nav_MenuLogo">Random Recipes</li>
                        <li className="Nav_MenuName">{this.props.name}</li>
                        <li className="Nav_MenuLogout">
                            <Link onClick={this.handleLogout} to="/login" className="button">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}


const Banner = ({ active, children }) => (
    <div className={`banner ${active ? "active" : ""}`}>{children}</div>
  );