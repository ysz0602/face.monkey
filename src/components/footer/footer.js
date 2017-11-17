import React from 'react';
export default class ComponentFooter extends React.Component {
  render() {
    const footerConvertStyle = {
      miniFooter:{
        backgroundColor:'#333',
        color:'#FFF',
        paddingTop:'3px',
        paddingBottom:'3px'
      },
      miniFooter_h1:{
        footSize:'15px'
      }
    }
    return (
      <footer style={footerConvertStyle.miniFooter}>
        <h1 style={footerConvertStyle.miniFooter_h1}>这里是页脚</h1>
      </footer>
    )
  }
}
