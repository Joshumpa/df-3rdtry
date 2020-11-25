import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import GraphicsContainer from '../pages/GraphicsContainer'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const molderA04 = {
        client: "getInfo",
        server: "information",
        machine: "Molder-A04"
    }
    const molderA10 = {
        client: "getInfo",
        server: "information",
        machine: "Molder-A10"
    }

    return (
        <div className="col marginTop">
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Molder-A04
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Molder-A10
                    </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <GraphicsContainer
                            tab={molderA04}
                        />
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <GraphicsContainer
                            tab={molderA10}
                        />
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default Tabs