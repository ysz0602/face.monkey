import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon, Tabs, message, Form, Input, Button, CheckBox,Modal } from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class MobileHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current:'top',
      modalVisible:false,
      action:'login',
      hasLogined:false,
      userNickName:'',
      userid:0
    }
  }
  setModalVisible(value){
    this.setState({modalVisible:value});
  }
  handleClick(e){
    if(e.key='register') {
      this.setState({current:'register'})
      this.setState((true))
    }else {
        this.setState({current:e.key})
    }
  }
  handleSubmit(e){
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    this.props.form.validateFields((err, formData) => {
      if (!err) {
        console.log(formData);
        fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&password=password&r_userName='+formData.r_userName+'&r_password='+formData.r_password+'&r_confirmPassword='+formData.r_confirmPassword,myFetchOptions)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.setState({userNickName:json.UserNickName,userid:json.UserId})
        });
        message.success('请求成功!');
        this.setModalVisible(false);
      }
    });
  }
  login() {
    this.setModalVisible(true)
  }
  render(){
    const {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined ?
    <Link>
      <Icon type="inbox"/>
    </Link>
    :
    <Icon type="setting" onClick={this.login.bind(this)}/>
    return (
      <div id="mobileheader">
        <header>
          <img src="../images/face_monkey.png" alt="logo"/>
          <span>ReactNew</span>
          { userShow }
        </header>
        <Modal
          title="用户中心"
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          onCancel={() => this.setModalVisible(false)}
          onOk={() => this.setModalVisible(false)}
          okText="确认"
          cancelText="关闭"
        >
          <Tabs type="card">
            <TabPane tab="注册" key="2">
              <Form onSubmit={this.handleSubmit.bind(this)}>
                {getFieldDecorator('r_userName', {
                  rules: [{ required: true, message: '请输入您的账号!' }]
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                )}
                {getFieldDecorator('r_password', {
                  rules: [{ required: true, message: '请输入密码!' }]
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                )}
                {getFieldDecorator('r_confirmPassword', {
                  rules: [{ required: true, message: '请再次确认密码!' }]
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="再次输入密码" />
                )}
                <Button type="primary" htmlType="submit">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    )
  }
}
export default MobileHeader = Form.create()(MobileHeader);
