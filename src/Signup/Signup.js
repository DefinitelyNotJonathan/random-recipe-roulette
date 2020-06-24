//http://localhost:5000
import React from 'react'
import { Link } from 'react-router-dom'

export default class Signup extends React.Component {

    componentDidMount(){
     console.log('Signup did mount')   
    }

    render() {
        return(
            <div>
                <form>
                    <label htmlFor="firstName">FIRST NAME</label>
                    <input className="firstName"></input>
                    <label htmlFor="lastName">LAST NAME</label>
                    <input className="lastName"></input>
                    <label htmlFor="email">EMAIL</label>
                    <input className="email"></input>
                    <label htmlFor="password">PASSWORD</label>
                    <input className="password"></input>
                    <Link to="/login">SUBMIT</Link>
                </form>
            </div>
        )
    }

}