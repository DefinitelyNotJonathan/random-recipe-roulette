import React from 'react';
import { Link } from 'react-router-dom';
import config from './config';

export default class LogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        fetch(`${config.API_ENDPOINT}/api/logout`, {
            credentials: 'include',
        });
    }

    render() {
        return (
            <div className="logout">
                <Link onClick={this.handleLogout} to="/login" className="button">Logout</Link>
            </div>
        );
    }
}
