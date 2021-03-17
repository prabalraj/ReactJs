import React, { Component } from 'react';
import Login from '../login/login';
import Register from '../register/register';
import { Layout, Menu, Breadcrumb, Col, Avatar, Anchor, Row, Input, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  BellOutlined,


} from '@ant-design/icons';
import './homePage.css';


const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const style = { background: '#F8F8FF', padding: '8px 0' };



class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginVisible: false,
      regVisible: false,
      bounds: { left: 0, top: 0, bottom: 0, right: 0 },
      collapsed: false,
    }

  }

  draggleRef = React.createRef();
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  onSearch = value => console.log(value);


  render() {
    const { collapsed } = this.state;
    return (
      <Col span={24}>
        <Layout className="header" style={{ minHeight: '100vh' }} >
          <Anchor>
            <Sider className="slider" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
             { collapsed ? (<img className="logos" src="/images/download.png" alt="logo" />):
             <img className="logof" src="/images/urbanfull.jpeg" alt="logo" />
            }
              
              {/* <Avatar size={65} className="avatar"
                src={<img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="avatar" />}
    />*/}

              <Menu  className="slider" defaultSelectedKeys={['0']} mode="inline">
                <div >
                </div>
                <br />
                <Menu.Item key="0" icon={<HomeOutlined />}>
                  Dashboard
              </Menu.Item>
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                  Sales
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Sales">
                  <Menu.Item key="3">trends</Menu.Item>
                  <Menu.Item key="4">Channel</Menu.Item>
                  <Menu.Item key="5">Purchase</Menu.Item>
                  <Menu.Item key="5">Price</Menu.Item>
                </SubMenu>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  Shoppers
                </Menu.Item>
                <SubMenu key="sub2" icon={<UserOutlined />} title="Shoppers">
                  <Menu.Item key="3">trends</Menu.Item>
                  <Menu.Item key="4">Channel</Menu.Item>
                  <Menu.Item key="5">Purchase</Menu.Item>
                  <Menu.Item key="5">Price</Menu.Item>
                </SubMenu>
                <Menu.Item key="3" icon={<DesktopOutlined />}>
                  Team
          </Menu.Item>
                <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>

              </Menu>

            </Sider>
          </Anchor>


          <Layout className="site-layout">
           

            <Content style={{ margin: '0 16px' }}>
            <Button className="login-button" type="primary" shape="round" onClick={() => this.setState({ loginVisible: true })}>login</Button>
            <BellOutlined  style={{ fontSize: '37px' }} className="bell" />
            <Avatar size={40} className="avatar-small"
              src={<img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="avatar" />}
            />
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
             <br />
              <Row gutter={16}>
                <Col className="gutter-row" span={24}>
                  <div style={style}>
                    <div className="site-layout-content" style={{ padding: 24, minHeight: 500 }}>
                      Here is the sample Page.
                    </div>
                  </div>
                </Col>
              </Row>

            </Content>
            <Login visible={this.state.loginVisible}
              handleCancel={() => this.setState({ loginVisible: false })}
              openReg={() => {
                this.setState({
                  loginVisible: false,
                  regVisible: true,
                })
              }}
            />
            <Register visible={this.state.regVisible}
              handleCancel={() => this.setState({ regVisible: false })}
              openLogin={() => {
                this.setState({
                  loginVisible: true,
                  regVisible: false,
                })
              }}
            />
            {/*<Footer className="footer" style={{ textAlign: 'center' }}>#132, Jains Cambrae East, Avinashi Rd,
              Coimbatore, India 641004</Footer>*/}
          </Layout>
        </Layout>
      </Col>


    );
  }
}


export default HomePage;