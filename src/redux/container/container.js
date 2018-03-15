import React, { Component } from 'react';

import { connect } from 'react-redux'
import { GET_DOMAINS, SWITCH_LANGUAGE, TEST, getDomains, switchLanguage, test } from '../actions'
import { bindActionCreators } from 'redux'
import Home from '../../components/Home'


import { domaines } from '../../data/data'

class Container extends Component {
    /*
    constructor(props){
        super(props)
        
        this.state = {
            langue: 'fr',
            fr: {
                application: {
                    title: "Site des Services",
                    search: "Recherche"
                }
            },
            ar: {
                application: {
                    title: "موقع الخدمات",
                    search: "بحث"
                }
            },
            domaines: domaines
        }
    }
    */
    componentWillMount(){

        // console.log(store)
    }

    render() {
//<div dir={(this.state.langue === 'ar') ? 'rtl' : 'ltr'}>
        // return (
        //     <div dir={(this.state.langue === 'ar') ? 'rtl' : 'ltr'}>
        //         <Header application={this.state[this.state.langue].application} />
        //         <Sidebar domaines={this.state.domaines} langue={this.state.langue}/>
        //         <Main />
        //     </div>
        // );
//<div dir={(this.state.langue === 'ar') ? 'rtl' : 'ltr'}>
        console.log("props: ", this.props)
        return (
            <Home />
        );
    }
}

const mapStateToProps = state => {
    console.log("state: ", state) 
    return {
        domaines: state.domaines,
        langue: 'fr'
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({getDomains, switchLanguage, test }, dispatch)
}
//export default Container
export default connect(mapStateToProps, mapDispatchToProps)(Container);