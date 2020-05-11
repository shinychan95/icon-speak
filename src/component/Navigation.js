import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Menu, Affix } from 'antd';
import {
  InfoCircleOutlined,
  NotificationOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';


const Navigation = () => {
  return (
    <Affix style={{ marginBottom: 10 }}>
      <div className="text-center">
        <Menu
          defaultSelectedKeys={['maskMap']}
          defaultOpenKeys={['menu']}
          mode="horizontal"
          theme="dark"
        >
          <Menu.Item key="maskMap">
            <EnvironmentOutlined />
            <NavLink to="/">
              <span>장소 찾기</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="disasterMsg">
            <NotificationOutlined />
            <NavLink to="/ChoosePartofSpeech">
              <span>장소에 따라 말하기</span>
            </NavLink>
          </Menu.Item>
          
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
