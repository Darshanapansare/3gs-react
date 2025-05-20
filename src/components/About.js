import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import web from '../images/about.jpg'
import Common from './Common';

export class About extends Component {
  render() {
    return (
      <>
       <Common name="Welcome to about page" imgsrc={web} visit="/contact" btnname="contact now" />
      </>
    )
  }
}

export default About
