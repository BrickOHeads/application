import React, { Component } from 'react';
import '../Styles/Header.css';

var FontAwesome = require('react-fontawesome');

class Header extends Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div className="Header">
        <style>@import url('https://fonts.googleapis.com/css?family=Bellefair|Philosopher|Tenor+Sans');</style>
        <div className="rocket">
            <FontAwesome
                 className='super-crazy-colors'
                 name='rocket'
                 size='2x'
                 spin
                 style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
             <h1>Brittany Arsi</h1>
        </div>
            <h2 className="sentence">I
              <div className="pushEffect">
                <span>Am Creative at Problem Solving.</span>
                <span>Am a Front End Web Developer.</span>
                <span>Enjoy Learning Every Day.</span>
                <span>Am a Dreamer.</span>
                <span>Am A Team Player.</span>
              </div>
            </h2>
        <h3>Contact me:</h3>

        <FontAwesome
             name='envelope'
             size='2x' />




      </div>
    )
  }
}

export default Header;
