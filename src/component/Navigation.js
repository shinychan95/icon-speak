import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Affix } from 'antd';
import {
  InfoCircleOutlined,
  NotificationOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';


const Navigation = (props) => {
  console.log("props.currentPath: ", props)

  return (
    <Affix style={{ marginBottom: 10 }}>
      <div className="text-center">
        <Menu
          activeKey={props.currentPath}
          selectedKeys={props.currentPath}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="Home">
            <EnvironmentOutlined />
            <NavLink to="/Home">
              <span>장소 찾기</span>
            </NavLink>
          </Menu.Item>

          {/* <Menu.Item key="MakeSpeech">
            <NotificationOutlined />
            <NavLink to="/MakeSpeech">
              <span>장소에 따라 말하기</span>
            </NavLink>
          </Menu.Item> */}
          
          <Menu.Item key="about">
            <InfoCircleOutlined />
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </Affix>
  );
};

export default Navigation;
