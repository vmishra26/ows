import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid d d-inline-flex">
                    <div class=" row">
                        <div style={{ backgroundColor: 'rgb(50,154,219)', height: '33em' }}>
                            <h1 style={{ fontFamily: " 'Source Sans Pro',sans-serif", fontSize: '55px', fontWeight: '600px', color: '#fff', paddingTop: '100px', paddingLeft: '25px' }}><b>Aspects Fieldwork & Research</b></h1>
                            <center><b style={{ fontSize: '20px', }}>REDIRECTING CURIOSITY IN THE RIGHT DIRECTION</b></center>
                        </div>
                    </div>
                    <div class="col-md-6 p-5" style={{ backgroundColor: 'rgb(234,107,16)', height: '33em' }}>
                        <h1 style={{ fontFamily: "'Source Sans Pro',sans-serif", fontSize: '55px', fontWeight: '600px', color: '#000', paddingTop: '100px', paddingLeft: '25px' }} >Understand Audience</h1>
                        <p style={{ fontSize: '20px', color: '#000', fontFamily: "'Source Sans Pro'  sans-serif", }}>Knowing your audience isn’t enough. Knowing their interests, needs, barriers, motivation elevates your brand to connect and understand your targeted groups</p>
                    </div>
                </div>
            </div > 
        )

    }
}
export default About