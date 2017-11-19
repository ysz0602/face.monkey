import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
// import {HashRouter as Router,Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
class Root extends React.Component {
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <PCIndex/>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <MobileIndex/>
        </MediaQuery>
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render(<Root/>, document.getElementById('app'));
