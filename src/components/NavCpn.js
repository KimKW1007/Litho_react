import React, { Component } from 'react';

class NavCpn extends Component {
  render() {
    return (
      <>
        <nav id="nav">
          <div className="nav_inner">
            <div className="nav_img_bg"></div>
            <div className="nav_menu_box">
              <ul className="menu_inner">
                <li><a href="#" title="home">home</a></li>
                <li><a href="#" title="about">about</a></li>
                <li><a href="#" title="services">services</a></li>
                <li><a href="#" title="portfolio">portfolio</a></li>
                <li><a href="#" title="blog">blog</a></li>
                <li><a href="#" title="contact">contact</a></li>
              </ul>
              <ul className="sns_inner">
                <li><a href="#" title="FACEBOOK"><i className="fa fa-facebook-f"></i><span>FACEBOOK</span></a></li>
                <li><a href="#" title="TWITTER"><i className="fa fa-twitter"></i><span>TWITTER</span></a></li>
                <li><a href="#" title="INSTAGRAM"><i className="fa fa-instagram"></i><span>INSTAGRAM</span></a></li>
                <li><a href="#" title="DRIBBBLE"><i className="fa fa-dribbble"></i><span>DRIBBBLE</span></a></li>
              </ul>
              <div className="menu_cl_btn_box">
                <span><a href="#" className="menu_cl_btn"><i className="ti-close"></i></a></span>
              </div>
            </div>
          </div>
        </nav>       
      </>
    );
  }
}

export default NavCpn;