import React, { Component } from "react";

class Industry extends Component {
    render() {
        return (
            <div class="container-fluid" id="#a-industry">
                <div class="mx-5 mt-3 ">
                    <h2 style={{ textAlign: 'center', color: 'blue' }}>Industry we work with</h2>
                    <div class="row mx-5">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/agriculture.jpg" width="100%" class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle">Agriculture</span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/automotive.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle">Automotive</span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/aviation.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle">Aviation</span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/ecom.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle">e-commerce</span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/education.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle"> Education</span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/electronic.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle"> Electronic</span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/film.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle"> Flim </span></center>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <img src="images/fmcg.jpg" style={{ width: '100%' }} class="img-responsive" />
                            <center> <span style={{ paddingLeft: '30%', paddingRight: '33%' }} class="industryTitle"> FMGC market </span></center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <center><a href="industry.htm" id="a_industry"> <button class="btn btn-success industryButton">View more</button></a></center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Industry