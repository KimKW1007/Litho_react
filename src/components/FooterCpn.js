import React, { Component } from 'react';

class FooterCpn extends Component {
  render() {
    return (
      <>
        <footer id="footer">
            <div className="container">
              <div className="inner_box">
                <div className="f_logo_box">
                  <h2><a href="#" title="Logo"><img src="./img/logo-parrot-green.png" alt="logo"/></a></h2>
                </div>
                <address>
                  <span>+1 234 567 8910</span>
                  <span>27 EDEN WALK EDEN CENTRE, PARIS, FRANCE</span>
                  <span><a href="#" title="INFO@YOURDOMAIN.COM">INFO@YOURDOMAIN.COM</a></span>
                </address>
                <div className="sns_banner">
                  <span><a href="#" title="facebook"><i className="fa fa-facebook-f"></i></a></span>
                  <span><a href="#" title="dribbble"><i className="fa fa-dribbble"></i></a></span>
                  <span><a href="#" title="twitter"><i className="fa fa-twitter"></i></a></span>
                  <span><a href="#" title="instagram"><i className="fa fa-instagram"></i></a></span>
                </div>
              </div>
            </div> 
          </footer>        
      </>
    );
  }
}

export default FooterCpn;