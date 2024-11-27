import React, {useState} from "react";
import { Flex, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {UserOutlined, ProfileOutlined, LogoutOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined} from '@ant-design/icons';
import logo from '../logo/logo.png'

const Sidebar = () => {
   const [selectedKey, setSelectedKey] = useState('1'); // Single state to track active menu item

   const handleMenuClick = (e) => {
       setSelectedKey(e.key); // Update the active menu item
   };

   return (
       <>
           <Flex align="center" justify="center">
               <div className="logo">
                   <img src={logo} alt="Logo" />
               </div>
           </Flex>

           <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '2px 16px' }}>
               {/* Top menu items */}
               <Menu
                   mode="inline"
                   selectedKeys={[selectedKey]} // Controlled active state
                   onClick={handleMenuClick}
                   className="menu-bar"
                   items={[
                       {
                           key: '1',
                           icon: <UserOutlined />,
                           label: 'Dashboard',
                       },
                       {
                           key: '2',
                           icon: <CarryOutOutlined />,
                           label: 'Deliveries',
                       },
                       {
                           key: '3',
                           icon: <OrderedListOutlined />,
                           label: 'Fleet',
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
                           key: '4',
                           icon: <SettingOutlined />,
                           label: 'Settings',
                       },
                       {
                           key: '5',
                           icon: <LogoutOutlined />,
                           label: 'Logout',
                       },
                   ]}
               />
           </div>
       </>
   );
};

export default Sidebar;