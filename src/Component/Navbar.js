import { Link } from "react-router-dom";
import React, { Component } from "react";




class Navbar extends Component{
    render(){
        return(
            <div>
                <header class="header position-sticky top-0 position">

                    <div class="d-inline-flex">

                    <img class="img-fluid" src="Image/logo_1.png" alt="error"/>

                    <div>

                        <nav class="navbar navbar-expand-sm mt-4 ms-5 ps-5">
                            <div class="container-fluid ms-5">

                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <span class="navbar-toggler-icon navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="mynavbar">
                                    <ul class="navbar-nav">
                                        <li class="nav-item"><Link class="nav-link" to="/"><b> Home </b> </Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/About"><b> About Us </b> </Link></li>
                                        <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#"><b> Servics</b></a>
                                            <ul class="dropdown-menu bg-success"> 
                                                <li><Link class="dropdown-item" to="#"><b> Qualitative </b></Link></li>
                                                <li><Link class="dropdown-item" to="#"><b> Quantitative</b></Link></li>
                                                <li><Link class="dropdown-item" to="#"><b> Other Services</b></Link></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item"><Link class="nav-link" to="/Industry"><b> Industry </b> </Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/Coverage"><b> Coverage </b> </Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/Contact"><b> Contact Us </b> </Link></li>
                                        <li class="nav-item"><button type="button" class="nav-link btn btn-success text-white"> Join Our pannel</button></li>

                                    </ul>

                                </div>
                            </div>
                        </nav>

                    </div>

                </div>
                </header>
            </div>
        )
    }
}        

export default Navbar;