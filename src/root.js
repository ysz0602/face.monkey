import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileIndex from './components/mobile_index';
import MobileNewsDetails from './components/mobile_news_details';
import MobileUserCenter from './components/mobile_usercenter';
import {HashRouter as Router, Route} from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
class Root extends React.Component {
  render(){
    return (
      <div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <Router>
            <div>
              <Route exact path="/" component={ PCIndex }/>
              <Route path="/details/:uniquekey" component={ PCNewsDetails }/>
              <Route path="/usercenter" component={ PCUserCenter }/>
            </div>
          </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <Router>
            <div>
              <Route exact path="/" component={ MobileIndex }/>
              <Route path="/details/:uniquekey" component={ MobileNewsDetails }/>
              <Route path="/usercenter" component={ MobileUserCenter }/>
            </div>
          </Router>
        </MediaQuery>
      </div>
    );
  }
}

// Render the main component into the dom
ReactDOM.render(<Root/>, document.getElementById('app'));
