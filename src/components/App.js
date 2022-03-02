import React, { Component } from 'react';
import WrapCpn from './WrapCpn';
import GoTopCpn from './GoTopCpn';
import NavCpn from './NavCpn';
import OverlayCpn from './OverlayCpn';

class App extends Component {
  render() {
    return (
      <>
       <WrapCpn/>
       <GoTopCpn/>
       <NavCpn/>
       <OverlayCpn/>
      </>
    );
  }
}

export default App;
