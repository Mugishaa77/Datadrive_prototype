import React, {useState} from 'react';
import {Layout, Button, Flex} from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import {MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import CustomHeader from './components/Header';
import './App.css';
import MainContent from './dashboardContent/MainContent';
import SideContent from './components/SideContent';

// Pages
import Dashboard from './pages/Dashboard';
import Deliveries from './pages/Deliveries';
import Fleet from './pages/Fleet';

const {Sider, Header, Content} = Layout;

export default function App () {
  const [collapsed, setCollapsed] = useState(false)
return (
 <Router>
   <Layout>
   <Sider 
     theme="light"
     trigger={null}
     collapsible
     collapsed={collapsed} 
     className="sider" >

<Sidebar/>
     </Sider>
  

   <Button 
   type="text"
   icon= {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
   onClick={()=> setCollapsed(!collapsed)}
   className="trigger-btn"
   
   />

  <Layout>
    <Header className="header">
      <CustomHeader/>
    </Header>
    <Content className="content">

      <Routes>
                {/* Define routes here */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/delivery" element={<Deliveries />} />
                <Route path="/fleet" element={<Fleet />} />
                </Routes>
    
    </Content>
    </Layout>

   </Layout>
 </Router>


)
}

