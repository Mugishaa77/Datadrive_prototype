import React, { useState } from "react";
import { Flex, Menu } from "antd";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  UserOutlined,
  ProfileOutlined,
  LogoutOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import logo from "../logo/logo.png";

const Sidebar = () => {
  const [selectedKey, setSelectedKey] = useState("1"); // Single state to track active menu item
  const navigate = useNavigate(); // React Router navigation hook

  const handleMenuClick = (e) => {
    setSelectedKey(e.key); // Update the active menu item
    switch (e.key) {
      case "1":
        navigate("/"); // Navigate to Dashboard
        break;
      case "2":
        navigate("/delivery"); // Navigate to Deliveries
        break;
      case "3":
        navigate("/fleet"); // Navigate to Fleet
        break;
      case "4":
        navigate("/settings"); // Navigate to Settings (optional, page needs to be implemented)
        break;
      case "5":
        console.log("Logout"); // Handle Logout logic
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </Flex>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: "2px 16px",
        }}
      >
        {/* Top menu items */}
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]} // Controlled active state
          onClick={handleMenuClick}
          className="menu-bar"
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <CarryOutOutlined />,
              label: "Deliveries",
            },
            {
              key: "3",
              icon: <OrderedListOutlined />,
              label: "Fleet",
            },
          ]}
        />

        {/* Spacer to control the gap */}
        <div style={{ flexGrow: 0.5 }}></div>

        {/* Bottom menu items */}
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]} // Same active state as the top menu
          onClick={handleMenuClick}
          className="menu-bar"
          items={[
            {
              key: "4",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            {
              key: "5",
              icon: <LogoutOutlined />,
              label: "Logout",
            },
          ]}
        />
      </div>
    </>
  );
};

export default Sidebar;
