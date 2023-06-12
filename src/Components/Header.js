import React, { Component } from "react";
import { Link } from "react-router-dom";
 
class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light navbar- ">
                    <div class="container d-inline-flex">
                        <div class="row">
                            <div class="col-md-4">
                                <a class="navbar-brand" href="#">
                                    <img src="images/logo.png" style={{width:'90%'}} alt="" />
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                                </div>
                            </div>
                            <div class="col-md-8 my-4 nav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link class="nav-link" to="">HOME</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/about">About US</Link>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <Link class="nav-link dropdown-toggle" to="/services" role="button" data-bs-toggle="dropdown">Services</Link>
                                        <ul class="dropdown-menu">
                                            <li><Link class="dropdown-item" to="">Link</Link></li>
                                            <li><Link class="dropdown-item" to="">Another link</Link></li>
                                            <li><Link class="dropdown-item" to="">A third link</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/industry"> Industry </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/coverage"> Coverage </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link" to="/contact"> Contact us </Link>
                                    </li>
                                    <br></br>
                                    <li><button type=" button" style={{background:'green'}}> join our panel</button>   </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                </nav>
            </div>
        )
    }
}

export default Header;