import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {

    componentDidMount(){
     console.log('Login did mount')   
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="email">EMAIL</label>
                    <input className="email"></input>
                    <label htmlFor="password">PASSWORD</label>
                    <input className="password"></input>
                    <Link to="/homepage">LOGIN</Link>
                </form>
                <Link to="/signup">SIGN UP FOR AN ACCOUNT</Link>
            </div>
        )
    }
}