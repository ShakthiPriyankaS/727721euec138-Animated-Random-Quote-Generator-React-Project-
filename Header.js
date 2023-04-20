import React, { Component } from 'react'
import Rout from './Rout';
import Footer from './Footer';
import welcome2 from './Welcome2.png'
export class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       image:welcome2
    }
  }
  render() {
    return (
      <div className="colo">
           <h1 className="tex">
          <img src={this.state.image} alt=""></img>
          Shakthi Random Quote Generator
          <img src={this.state.image} alt=""></img>
        </h1>
          <div className="rectangle">
      <Rout/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
      <i>Created by Shakthi Priyanka S</i>
      </div>
      </div>
    )
  }
}

export default Header
