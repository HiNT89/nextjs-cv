"use client";

import { use, useState } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBoxOpen, faFile } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: "/admin",
      icon: <FontAwesomeIcon icon={faFile} />,
      label: "File",
    },
    {
      key: "/admin/products",
      icon: <FontAwesomeIcon icon={faBoxOpen} />,
      label: "Product",
    },
    {
      key: "/admin/projects",
      icon: <FontAwesomeIcon icon={faBook} />,
      label: "Projects",
    },
  ];
  const onClick = (e: any) => {
    router.push(e.key);
  };
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
          defaultSelectedKeys={["/admin"]}
          items={menuItems}
          onClick={onClick}
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
