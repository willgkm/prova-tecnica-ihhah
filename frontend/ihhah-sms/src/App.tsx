import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LaptopOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import ClientePage from './pages/cliente/cliente';
import ClienteFormPage from './pages/cliente/form/cliente-form';

const { Header, Content, Footer, Sider } = Layout;

const sidebarItems: MenuProps['items'] = [
  {
    key: '1',
    icon: <LaptopOutlined />,
    label: <Link to="/cliente">Cliente</Link>,
  },
];

const App: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#fff', fontSize: '20px' }}>ihhah-sms</div>
        </Header>
        <Content style={{ padding: '0 0'}}>
          <Layout
            style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
          >
            <Sider style={{ background: colorBgContainer }} width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
                items={sidebarItems}
              />
            </Sider>
            <Content style={{ padding: '0 2rem', minHeight: 'calc(100vh - 200px)' }}>
              <Routes>
                <Route path="/" element={<ClientePage />} />
                <Route path="/cliente" element={<ClientePage />} />
                <Route path="/cliente/novo" element={<ClienteFormPage />} />
                <Route path="/cliente/:id" element={<ClienteFormPage />} />
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Utilizando componetes do AntDesing !
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
