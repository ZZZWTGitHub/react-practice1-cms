import React from 'react'
import { Button, Tooltip } from 'antd'
import "./assets/base.css"
import { SearchOutlined } from "@ant-design/icons" 
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div>App</div>
      <Tooltip title='Search Button'>
        <Button type='primary' shape="circle" icon={<SearchOutlined />}></Button>
      </Tooltip>
      <Outlet></Outlet>
    </>
  )
}
