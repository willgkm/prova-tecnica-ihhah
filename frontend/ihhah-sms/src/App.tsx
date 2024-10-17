import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HomePage from './pages/home/homepage';
import ClientePage from './pages/cliente/cliente';
import PlanoPage from './pages/plano/plano';
import MensagemPage from './pages/mensagem/mensagem';

const { Header, Content, Footer, Sider } = Layout;

const sidebarItems: MenuProps['items'] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: '2',
    icon: <LaptopOutlined />,
    label: <Link to="/cliente">Cliente</Link>,
  },
  {
    key: '3',
    icon: <NotificationOutlined />,
    label: <Link to="/plano">Plano</Link>,
  },
  {
    key: '4',
    icon: <NotificationOutlined />,
    label: <Link to="/mensagem">Mensagem</Link>,
  },
];

const App: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ color: '#fff', fontSize: '20px' }}>ihhah-sms</div>
        </Header>
        <Content style={{ padding: '0 48px' }}>
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
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cliente" element={<ClientePage />} />
                <Route path="/plano" element={<PlanoPage />} />
                <Route path="/mensagem" element={<MensagemPage />} />
              </Routes>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Apenas uma prova tecnica, utilizando componetes do AntDesing !
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
