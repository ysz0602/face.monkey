import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox, Modal, Card, notification } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import { HashRouter as Router, Route, Link } from 'react-router-dom';
class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    };
  }
  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=' + this.props.uniquekey, myFetchOptions)
    .then(response => response.json())
    .then(json => {
      this.setState({comments: json})
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    this.props.form.validateFields((err, formdata) => {
     if (!err) {
       fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=' + localStorage.userid + '&uniquekey=' + this.props.uniquekey + '&commnet=' + formdata.remark, myFetchOptions)
       .then(response => response.json())
       .then(json => {
         this.componentDidMount();
       })
     }
   });
  }
 addUserCollection() {
   var myFetchOptions = {
     method: 'GET'
   };
   fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid='+
   localStorage.userid+'&uniquekey='+this.props.uniquekey,myFetchOptions)
   .then(response => response.json())
   .then(json => {
     //收藏成功后进行全局的提醒
     notification['success']({
       message: 'ReactNews提醒',
       description: '收藏此文章'
     })
   })
 }
  render() {
    let { getFieldDecorator } = this.props.form;
    const { comments } = this.state;
    const commentList = comments.length
    ?
    comments.map((comment, index) => (
      <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
        <p>{comment.Comments}</p>
      </Card>
    ))
    :
    '没有任何评论';
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                {getFieldDecorator('remark', {})(
                  <Input type="textarea" placeholder="随便写2" />
                )}
              </FormItem>
              <Button type="primary" htmlType="submit">提交评论</Button>&nbsp;&nbsp;
              <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏该文章</Button>
            </Form>
            { commentList }
          </Col>
        </Row>
      </div>
    )
  }
}
export default CommonComments = Form.create()(CommonComments)
