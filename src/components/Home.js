import React, { Component } from 'react'
import web from '../images/home.png'

import Common from './Common';

import { NavLink } from "react-router-dom";
const Home =()=>{

    return (
      <>
        <Common name="Grow your business with " imgsrc={web} visit='/service' btnname='Get Started' />
      </>
    )
  
};

export default Home
