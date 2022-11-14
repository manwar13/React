import React, { Component } from "react";
class OurServices extends Component{
    render(){
        return(
            <div>
                <section className="mb-3">

                    <div class="container-fluid px-4 bg-primary">

                        <h2 class="text-white pt-5 pb-2 text-center">Our Services</h2>

                        <div class="row gx-5 px-4 pb-4">

                        <div class="col px-4 ">

                            <div class="bg-danger p-3">

                                <h5>Qualitative</h5>

                                <h6 class="fw-normal">Also known as primary research, qualitative analysis demands interaction and real-time data. This is the process of collating data that hasn’t been out there yet. Interviews, market research surveys, questionnaires, and more fall under qualitative or primary research.</h6>

                                    <div class="text-center">
                                        <button type="button" class="btn btn-success text-white">View More</button>
                                    </div>
                            </div>
                        </div>

                        <div class="col px-4">
                            <div class="p-3 bg-warning">

                                <h5>Quantitative</h5>

                                    <h6 class="fw-normal">When numbers and figures come together to form a proper analysis, it is called quantitative research. It is majorly used to find patterns and averages, make predictions, and generalize results to a wider population.Quantitative research is widely used in understanding customer psychology.</h6>


                                    <div class="text-center">
                                        <button type="button" class="btn btn-success text-white">View More</button>
                                    </div>

                            </div>
                        </div>

                        <div class="col px-4 ">
                            <div class="p-3 bg-danger">

                                <h5>Other Services</h5>

                                    <h6 class="fw-normal">Aspects Fieldwork & Research is known for its dedication and competency to do comprehensive research for any industry across the country. This not only gives you a wide coverage, but also assures you of realistic data, statistics, and information to kickstart your business or launch a new product.</h6>

                                    <div class="text-center">
                                        <button type="button" class="btn btn-success text-white">View More</button>
                                    </div>

                            </div>
                        </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default OurServices;