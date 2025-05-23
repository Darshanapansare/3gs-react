import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <>
            <section id="header" className="">
            <div className="container-fluid nav-bg">
             
                    <div className="row">

                        <div className="col-10 mx-auto">

                            <nav className="navbar  navbar-expand-lg navbar-light bg-light sticky p-2 ">

                                <NavLink className="navbar-brand" to="/">Company</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>

                                </div>

                            </nav>
                        </div>

                    </div>
                

            </div>
            </section>
            </>
           
        )
    }
}

export default Navbar
