import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';

// const Banner = (active) => (
//     <div className={`Nav_Container ${active ? "active" : ""}`}>
//         <nav>
//             <ul className="Nav_Menu">
//                 <li className="Nav_MenuLogo">Random Recipes</li>
//                 <li className="Nav_MenuName">{this.props.name}</li>
//                 <li className="Nav_MenuLogout">
//                     <Link onClick={this.handleLogout} to="/login" className="button">Logout</Link>
//                 </li>
//             </ul>
//         </nav>
//     </div>
//   );

export default class HomeNav extends React.Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.state = {
            active: false,
        };
    }

    handleLogout() {
        fetch(`${config.API_ENDPOINT}/api/logout`, {
            credentials: 'include',
        });
    }

    toggleActive() {
        if(this.state.active === true) {
            this.setState({
                active: false,
            });
        } else {
            this.setState({
                active: true,
            });
        }
    }

    render() {
        return (
            <div className={`Nav_Container ${this.state.active ? "active" : ""}`}>
                <nav className="Nav_Navbar">
                    <button type="button" className="Menu_button" onClick={this.toggleActive}>{this.state.active ? "-" : "+"}</button>
                    <ul className="Nav_Menu">
                        <li className="Nav_MenuLogo">Random Recipes</li>
                        {/* <li className={`Nav_MenuName ${this.state.active ? "" : "hidden"}`}>{this.context.user.firstname}</li> */}
                        <li className={`Nav_MenuLogout ${this.state.active ? "" : "hidden"}`}>
                            <Link onClick={this.handleLogout} to="/login" className="button">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
