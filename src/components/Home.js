import React, { Component } from 'react';
import { Header, Sidebar, Main } from './layouts'
import { domaines } from '../data/data'

class Home extends Component {
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
    
    componentWillMount(){

    }

    render() {

        console.log(this.state.domaines)
        return (
            <div dir={(this.state.langue === 'ar') ? 'rtl' : 'ltr'}>
                <Header application={this.state[this.state.langue].application} />
                <Sidebar domaines={this.state.domaines} langue={this.state.langue}/>
                <Main />
            </div>
        );
    }
}

export default Home;