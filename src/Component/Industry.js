import React, {Component} from "react";
class Industry extends Component{
    render(){
        return(
            <div>

                <section class="container">

                    <h3 class="text-center mt-2 text-primary fw-bold">Industry We Work With</h3>


                    <div class="row section text-white">

                        <div class="col-sm-3">
                        <img src="Image/agri.jpg" alt="Snow" width="91%"/>
                        <div class="caption"><p class="text-center bg-secondary me-4 p-1">Agriculture</p></div>
                        </div>

                        <div class="col-sm-3">
                        <img src="Image/automotive.jpg" alt="Forest" width="91%"/>
                        <div class="caption"><p class="text-center bg-secondary me-4 p-1">Automotive</p></div>
                        </div>

                        <div class="col-sm-3">
                        <img src="Image/aviation.jpg" alt="Mountains" width="91%"/>
                        <div class="caption"><p class="text-center bg-secondary me-4 p-1">Aviation</p></div>
                        </div>

                        <div class="col-sm-3">
                            <img src="Image/ecom.jpg" alt="Mountains" width="91%"/>
                            <div class="caption"><p class="text-center bg-secondary me-4 p-1">Ecommerce</p></div>
                        </div>

                    </div>

                    <div class="row section text-white">

                        <div class="col-sm-3">
                        <img src="Image/education.jpg" alt="Snow" width="91%"/>
                        <div class="caption"><p class="text-center bg-secondary me-4 p-1">Education</p></div>
                        </div>

                        <div class="col-sm-3">
                        <img src="Image/electronic.jpg" alt="Forest" width="91%"/>
                        <div class="caption"><p class="text-center bg-secondary me-4 p-1">Electronic</p></div>
                        </div>

                        <div class="col-sm-3">
                        <img src="Image/film.jpg" alt="Mountains" width="91%"/>
                        <div class="caption"><p class="text-center bg-secondary me-4 p-1">Film</p></div>
                        </div>

                        <div class="col-sm-3">
                            <img src="Image/fmcg.jpg" alt="Mountains" width="91%"/>
                            <div class="caption"><p class="text-center bg-secondary me-4 p-1">FMCG Market</p></div>
                        </div>

                    </div>

                    <div class="text-center">
                        <button type="button" class="btn btn-success text-white">View More</button>
                    </div>

                </section>

            </div>
        );
    }
}

export default Industry;