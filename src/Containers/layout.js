import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from '../routes' 

import Header from '../Components/Header'

class layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="container">
                        <Switch>
                            {routes.map((r, i) => {
                                return r.Component ? (
                                    <Route
                                    key = {i}
                                    path = {r.path}
                                    exact = {r.exact}
                                    render = {p => <r.Component {...p}/>}
                                    />
                                ) : null;
                            })
                            }
                        </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default layout;