import React, { useState } from 'react'
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { useNavigate, Outlet } from 'react-router-dom'
import SearchInput from '@/components/search'
import Login from '@/components/login'

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('首页', '/index', <PieChartOutlined />),
  getItem('排行榜', '/rank', <DesktopOutlined />),
  getItem('歌单', '/playList', <UserOutlined />),
  getItem('MV', '/mvList', <TeamOutlined />),
  getItem('歌手', '/artist', <VideoCameraOutlined />),
  getItem('新碟上架', '/album', <CustomerServiceOutlined />)
]

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const navigate = useNavigate()

  const menuClick = (e: { key: string }) => {
    navigate(e.key)
  }

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)'
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={['/index']}
          mode="inline"
          items={items}
          onClick={menuClick}
        />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        >
          <Login />
          <SearchInput />
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Outlet></Outlet>
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default Home
