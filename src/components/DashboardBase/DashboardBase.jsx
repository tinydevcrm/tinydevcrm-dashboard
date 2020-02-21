// Base dashboard layout (sidebar, navbar, empty content, etc.)

import React from 'react';
import {
    Layout,
    Menu,
    Icon
} from 'antd';

import 'antd/dist/antd.css';
import styles from './DashboardBase.module.scss';


const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={'1'}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header
                        style={{background: '#fff', padding: 0}}>
                            <Icon className={styles.trigger} type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle}/>
                    </Header>
                    <Content
                        style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 200}}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default SiderDemo;
