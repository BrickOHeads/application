import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Baselayout extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return(
      <div>
        <Header />
        {this.props.children}

      </div>
    )
  }
}

export default Baselayout;
