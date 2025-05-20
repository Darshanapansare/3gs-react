import React, { Component } from 'react'
import web from '../images/download.png'
import { NavLink } from "react-router-dom";


const Common = (props)=> {

    return (
      <>
       <section id="header" className='d-flex align-items-center'>
          <div className="container-fluid nav_bg">
            <div className="row">
              <div className="col-10 mx-auto">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className="my-5">{props.name}</h1>
                <p className="my-3">We are the team of developer making websites. </p>
                <div className="mt-3">
                  <NavLink className="btn-get-started btn btn-primary" to={props.visit}>{props.btnname}
                  </NavLink></div>
              </div>
              <div className="col-md-6 order-1 order-lg-2 header-img  text-center m-auto" >
               <img src={props.imgsrc} className="img-fluid animated"  alt="img"/>
              </div>
              </div>
              </div>
            </div>
          </div>

        </section>
      </>
    )
  
}

export default Common
