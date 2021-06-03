import { Layout, Menu, Breadcrumb } from "antd";

import "../../Styles/header-navigation.scss";
const { Header, Content, Footer } = Layout;
const HeaderNavigation = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1" href="/albums">
            Albums
          </Menu.Item>
          <Menu.Item key="2" href="/livre">
            Livres
          </Menu.Item>
          {/* <Menu.Item key="3">nav 3</Menu.Item> */}
        </Menu>
      </Header>
      {/*  { <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">Content</div>
      </Content>} */}
    </Layout>
  );
};

export default HeaderNavigation;
