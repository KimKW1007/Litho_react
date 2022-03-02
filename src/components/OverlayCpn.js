import React, { Component } from 'react';

class OverlayCpn extends Component {
  render() {
    return (
      <>
        <div className="overlay">
          <div className="overlay_inner">
            <iframe src="https://www.youtube.com/embed/67PstLDYXGI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="cl_btn_box">
            <a href="#"><i className="ti-close"></i></a>
          </div>
        </div>        
      </>
    );
  }
}

export default OverlayCpn;