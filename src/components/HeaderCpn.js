import React, { Component } from 'react';

class HeaderCpn extends Component {
  render() {
    return (
      <>
        <header id="header">
            <div className="container">
              <div className="inner_box">
                <div className="logo_box">
                  <h2><a href="#" title="logo"><img src="./img/logo-parrot-green.png" alt="logo"/></a></h2>
                </div>
                <div className="nav_N_tel_box">
                  <div className="tel_box">
                    <a href="tel:+821234567890">Call us +82 123 456 7890</a>
                  </div>
                  <div className="nav_btn_box">
                    <a href="#" title="menu button" className="nav_btn">
                      <span></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>        
      </>
    );
  }
}

export default HeaderCpn;