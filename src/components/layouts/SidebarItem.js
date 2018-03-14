import React, { Component } from 'react';

class SidebarItem extends Component {
    render(props) {
        return (
            <li>
                <a className="app-menu__item" href="/"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">{this.props.title}</span></a>
            </li>
        );
    }
}

export default SidebarItem;