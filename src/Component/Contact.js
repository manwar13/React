import React, {Component} from "react";
class Contact extends Component{
    render(){
        return(
            <div>

                <section class="bg-primary">

                    <h2 class="text-white text-center pt-5">Contact Us</h2>

                    <div class="row">

                        <div class="col ms-4">
                            <input type="text" class="form-control mb-3" placeholder="Enter Name"/>
                            <input type="email" class="form-control mb-3" placeholder="Enter Email"/>
                            <input type="number" class="form-control mb-3" placeholder="Enter Contact with Country Code. For eg+91"/>
                            <input type="text" class="form-control mb-3" placeholder="Enter Subject"/>
                            <textarea class="form-control mb-3" rows="7"></textarea>
                            <div class="text-center">
                                <button type="button" class="btn btn-success text-white mb-4">Submit</button>
                            </div>
                        </div>

                        <div class="col"><img src="Image/A.png" class="img-fluid" alt="Error"/></div>
                    </div>

                </section>


            </div>
        );
    }
}

export default Contact;