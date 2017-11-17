require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ComponentHeader from './header/header';
import BodyIndex from './body/BodyIndex';
import ComponentFooter from './footer/footer';
class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ComponentHeader/>
        <BodyIndex userid={999} username={'Parry1'} />
        <ComponentFooter/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
