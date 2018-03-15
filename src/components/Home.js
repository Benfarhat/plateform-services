import React, { Component } from 'react'
import store from '../index'

import { Header, Sidebar, Main } from './layouts'
export default class Home extends Component {
    render() {
        console.log("state2 - " ,     store.getState())
        console.log("props2 - " , this.props)
        return (
            <div>
            </div>
        )
    }
}

/*            <div dir={(this.state.langue === 'ar') ? 'rtl' : 'ltr'}>
                <Header application={{test:"test"}} />
                <Sidebar domaines={this.state.domaines} langue="fr"/>
                <Main />
            </div>*/
