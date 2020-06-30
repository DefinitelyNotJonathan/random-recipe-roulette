import React from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import config from '../config'

export default class Login extends React.Component {

    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            p_word: ''
        };

        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePassword(e) {
        this.setState({ p_word: e.target.value })
    }

    handleEmail(e) {
        this.setState({ email: e.target.value })
    }

    fetchUser(validUserId) {
        return fetch(`${config.API_ENDPOINT}/api/users/` + validUserId, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
            .catch((error) => {
            })
            .then(res => res.json())

    }
    handleSubmit(e) {
        e.preventDefault();
        const data = this.state;
        fetch(`${config.API_ENDPOINT}/api/login`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((data) => {
                if (data && data.hasOwnProperty("id")) {
                    return data.id
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then((user_id) => this.fetchUser(user_id))
            .then((user) => {
                if (user.hasOwnProperty('id')) {
                    this.context.setUser(user)
                    console.log(user)
                    this.props.history.push('/')
                } else {
                    // some problem with the data load!
                }
            })
            .catch((error) => {
                console.log('an error happened');
                console.log(error);
            })
    }
    render() {
        return (
            <div className="Login_container">
                <form action=""
                    onSubmit={(e) => this.handleSubmit(e)}
                    className="Login_form"
                >
                    <label htmlFor="email" className="Login_label">Email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={(e) => this.handleEmail(e)} className="Login_input" required></input>
                    <label htmlFor="password" className="Login_label">Password</label>
                    <input type="password" id="password" name="password" value={this.state.p_word} onChange={(e) => this.handlePassword(e)} className="Login_input" required ></input>

                    <div className="Login_buttoncontainer">
                        <button type="submit" className="Login_button" >Sign In</button>
                    </div>
                    <Link to="/signup" className="Login_signup">Create an account</Link>
                </form>
                <br/>
            </div>

        )
    }
}