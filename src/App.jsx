import React, { useEffect, useState } from 'react'
import { Layout, Dropdown, Menu, Space, Avatar, message } from 'antd'
import "./assets/base.less"
import { CaretDownOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons"
import { Outlet, useNavigate } from 'react-router-dom'
import './pages/less/app.css'
import logoImg from './assets/logo_moviee.png'
import defaultAvatar from './assets/defaultAvatar.jpg'

export default function App() {
  const { Header, Footer, Sider, Content } = Layout
  const navigate = useNavigate()
  // eslint-disable-next-line
  const [avatar, setAvatar] = useState(defaultAvatar)
  // eslint-disable-next-line
  const [userName, setUserName] = useState('匿名游客')
  const logout = () => {
    localStorage.clear()
    // 清除localStorage中的数据
    navigate('/login')
    message.success('Logout succeed')
  }
  const changeMessage = () => {
    message.success('You can change your message hear')
  }
  const onClick = (e) => {
    console.log('click ', e);
  }

  useEffect(() => {
    let realusername = localStorage.getItem('username')
    if (realusername) {
      setUserName(realusername)
    }
    // 获取localStorage中的username
    let realavatar = localStorage.getItem('avatar')
    if (realavatar) {
      setUserName(realavatar)
    }
    // 获取localStorage中的avator
  }, [])

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <span onClick={changeMessage}>
              修改资料
            </span>
          ),
        },
        {
          type: 'divider',
        },
        {
          key: '2',
          label: (
            <span onClick={logout}>
              退出登录
            </span>
          ),
        },
      ]}
    />
  );


  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  return (
    <>
      <Layout id='app'>
        <Header className='appHeader'>
          <img src={logoImg} alt="" className='logoImg' height={60} />
          <div>
            <Dropdown overlay={menu} placement="bottomRight" arrow align={{ targetOffset: [0, 0] }}>
              {/* eslint-disable */}
              <a onClick={e => e.preventDefault()}>
                {/* eslint-disable */}
                <Space>
                  <Avatar size="large" src={avatar} /> {userName}
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider>
            <Menu
              onClick={onClick}
              style={{
                
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
              theme="dark"
            />
          </Sider>
          <Content>
            <div><Outlet></Outlet></div>
          </Content>
        </Layout>
        <Footer className='appFooter'>Footer</Footer>
      </Layout>
    </>
  )
}
