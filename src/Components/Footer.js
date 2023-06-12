import React,{ Component } from "react";

class Footer extends Component {
    render() {
        return(
            <footer>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-4" >
                            <a href="#"><img id="footer_img" src="images/logo.png" style={{width:"80%"}} class="pb-4" /></a>
                        </div>
                        <div class="col-sm-3">
                            <ul class="list-unstyled">
                                <li class="h5" id="link_name">Service</li>
                                <li ><a href="#" class="a">Qualitative</a></li>
                                <li><a href="#" class="a" >Quantitative</a></li>
                                <li><a href="#" class="a">Other Services</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-3 " >
                            <ul class="list-unstyled">
                                <li class="h5" id="link_name">Address</li>
                                <p style={{color:"rgb(250, 35, 107)", fontWeight:"bold", fontSize:"small"}}>
                                    Akshya Nagar 1st Block 1st Cross,<br/>
                                        Rammurthy nagar Bangalore-<br/>
                                      560016</p>
                                    </ul>
                    </div>
                                <div class="col-sm-2">
                                    <ul class="list-unstyled">
                                        <li class="h5" id="link_name">Contact</li>
                                        <li><a href="#" class="a">+91 7303761296</a></li>
                                        <li><a href="#" class="a">+91 9022545605</a></li>
                                        <li><a href="#" class="a">vishalmish0@gmail.com</a></li>
                                    </ul>
                                </div>
                        </div>
              </div>
        </footer>    
                
        );
    }
}
export default Footer;