import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import '../styles/mobile.scss';
export default class MobileIndex extends React.Component {
  render(){
    return (
      <div>
        <MobileHeader />
        <MobileFooter />
      </div>
    )
  }
}
