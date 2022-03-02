import React, { Component } from 'react';
import HeaderCpn from './HeaderCpn';
import MainCpn from './MainCpn';
import FooterCpn from './FooterCpn';

class WrapCpn extends Component {
  render() {
    return (
      <>
        <div id='wrap'>
          <HeaderCpn/>
          <MainCpn/>
          <FooterCpn/>
        </div>
      </>
    );
  }
}

export default WrapCpn;