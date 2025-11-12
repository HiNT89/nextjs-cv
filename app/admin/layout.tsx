"use client";

import { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  ProjectOutlined,
  FileTextOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "3",
      icon: <ProjectOutlined />,
      label: "Projects",
    },
    {
      key: "4",
      icon: <FileTextOutlined />,
      label: "Experience",
    },
    {
      key: "5",
      icon: <SettingOutlined />,
      label: "Settings",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {collapsed ? "CV" : "CV Admin"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div
            style={{
              fontSize: "18px",
              cursor: "pointer",
              padding: "0 24px",
            }}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
