import React, { Component } from 'react'
import Header from './Header'
import Splash from './Splash'
import Footer from './Footer'


export default class General extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Splash/>
        <Footer/>
      </div>
    )
  }
}
