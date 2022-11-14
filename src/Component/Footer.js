import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div>
                <section class="container">

                    <div class="row">

                        <div class="col-3 mt-4"><img class="img-fluid" src="Image/logo_1.png" alt="Error"/></div>

                        <div class="col-3 section6">
                            <ul class="list-unstyled mt-4">
                                <li class="h5">Services</li>
                                <li class="text-danger">Qualitative</li>
                                <li class="text-danger">Quantitative</li>
                                <li class="text-danger">Other Services</li>
                            </ul>
                        </div>

                        <div class="col-3">
                            <ul class="list-unstyled mt-4 ps-5">
                                <li class="h5">Address</li>
                                <li class="text-danger">Akshya Nagar 1st Block 1st Cross, Rammurthy nagar Bangalore-560016</li>
                                <li class="text-danger"></li>
                            </ul>
                        </div>

                        <div class="col-3">
                            <ul class="list-unstyled mt-4 ps-4">
                                <li class="h5">Contact</li>
                                <li class="text-danger">+91 9874563120</li>
                                <li class="text-danger">+91 9874563210</li>
                                <li class="text-danger">contact@arf.com</li>
                                <li>

                                    <div class="text-start mt-2 section_6A">

                                        <button class="btn btn-primary rounded-pill" type="button">
                                        <i class="fa-brands fa-facebook"></i>
                                        </button>

                                        <button class="btn btn-info rounded-pill" type="button">
                                        <i class="fa-brands fa-twitter text-white"></i>
                                        </button>

                                        <button class="btn btn-danger rounded-pill" type="button">
                                            <i class="fa-brands fa-youtube"></i>
                                        </button>


                                        <button class="btn btn-danger rounded-pill" type="button">
                                            <i class="fa-brands fa-instagram"></i>
                                        </button>

                                    </div>

                                </li>

                            </ul>

                        </div>

                    </div>

                </section>

                <footer class="bg-dark text-center">

                <p class="text-white p-4">Copyright © 2021 <a href="" class="text-secondary"> Aspects Fieldwork & Research </a>| Design & Developed By <a href="" class="text-secondary"> Ntech Global Solutions </a></p>

                </footer>
            </div>
        )
    }
}

export default Footer;