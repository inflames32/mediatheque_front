import { Layout, Menu, Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";

import "../../Styles/header-navigation.scss";
const { Header, Content, Footer } = Layout;
const HeaderNavigation = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {/*       <Button type="primary" href="/">
            Accueil
          </Button> */}
          <Link to="/"> Accueil</Link>
          {/*   <Button type="primary" href="/albums">
            Albums
          </Button>
          <Button type="primary" href="/livre">
            Livres
          </Button> */}
          <Link type="primary" to="/albums" type="primary" href="/albums">
            Albums
          </Link>
          <Link to="/livres" type="primary" href="/livre">
            Livres
          </Link>
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
