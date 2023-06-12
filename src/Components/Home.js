import React, { Component } from "react";
import Redirect from "./Redirect";
import About from "./about";
import Services from "./Services";
import Industry from "./Industry";
import Coverage from "./coverage";
import Contact from "./contact";

class Home extends Component{
    render(){
        return(
            <div>
                <About />
                <Redirect />
                <Services />
                <Industry />
                <Coverage />
                <Contact />
            </div>
        );
    }
}

export default Home;