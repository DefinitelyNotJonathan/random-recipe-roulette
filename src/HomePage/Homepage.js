import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ApiContext from '../ApiContext';
import config from '../config';
import Nav from '../Nav/Nav';

export default class HomePage extends React.Component {
  static contextType = ApiContext;
  constructor(props){
    super(props);
    this.state={
      toLogin: false,
      names: {},
    };
        // this.getNewRecipe = this.getNewRecipe.bind(this);
  }

  componentDidMount() {
   console.log('HomePage did mount');
    fetch(`${config.API_ENDPOINT}/api/recipes/names`, {
      credentials: 'include',
    })
    .then((response) => {
      if (response.status === 403) {
        this.setState({
          toLogin: true,
        });
      } else { return response.json(); }
    })
        // .then(res => res.json()) 
    .then((data) => {
      console.log('data');
      console.log(data);
      this.setState({
        names: data,
      });
      console.log('this.state.names[1]');
      console.log(this.state.names);
    });
  }

  render() {
    if (this.state.toLogin === true) {
      return <Redirect to='/login' />;
    }
    console.log('this.context.user');
    console.log(this.context.user);
    return (
      <div className="Page_Container">
        <Nav name={this.context.user.firstname}/>
        <div className="Homepage_Container">
          <p className="Homepage_Welcome">Sick of the same dinners? Done with your everyday desserts? Bored of the same old beverages? Start your culinary adventure with the click of a button!</p>
          <div className="NewRecipe_Link">
            <Link to="/newrecipe" className="button">Get A New Recipe!</Link>
          </div>
        </div>
      </div>
    );
  }
}
