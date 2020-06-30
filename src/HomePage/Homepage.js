import React from 'react'
import ApiContext from '../ApiContext'
import { Link, Redirect } from 'react-router-dom'
import config from '../config'
import HomeNav from '../HomeNav/HomeNav'

export default class HomePage extends React.Component {
    static contextType=ApiContext;
    constructor(props){
        super(props)
        this.state={
            toLogin:false,
            names: {}
        }
        // this.getNewRecipe = this.getNewRecipe.bind(this);
    }

    componentDidMount(){
     console.log('HomePage did mount') 
     fetch(`${config.API_ENDPOINT}/api/recipes/names`, {
        credentials: 'include'
      })
        .then(response => {
            if (response.status === 403) {
                this.setState({
                  toLogin: true
                })
            }
            else{return response.json()}
        })
        // .then(res => res.json()) 
        .then(data => {
            console.log('data')
            console.log(data)
            this.setState({
                names: data
            })
            console.log('this.state.names[1]')
            console.log(this.state.names)  
        }) 
    }

    render() {
    if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }
    console.log('this.context.user')
    console.log(this.context.user)
    return (
      <div className="Homepage_Container">
        <HomeNav name={this.context.user.firstname} className="Homepage_DashboardComp"></HomeNav>
        <h1>working on a front page</h1>
        <Link to="/newrecipe">Get A New Recipe!</Link>
      </div>

    )
  }
}