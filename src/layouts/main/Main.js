import React from "react";
import AppHeader from "../appHeader/AppHeader";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Navigation from "../navigation/Navigation";
import "./Main.less";

let { Content } = Layout;

let MainLayout = (props) => {
  
  const { title } = props;

  return (
    <div className='main'>
      <Navigation />
      <Layout className='site-layout'>
        <AppHeader title={title} />
        <Content
          className='site-layout-background'
          style={{
            minHeight: "100vh",
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </div>
  );
};

export default (MainLayout);
