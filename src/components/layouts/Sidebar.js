import React, { Component } from 'react';
import SidebarItem from './SidebarItem'

class Sidebar extends Component {
    getDomaines = () => this.props.domaines

    render(props) {


        return (
            <aside className="app-sidebar">
            <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="" />
              <div>
                <p className="app-sidebar__user-name">John Doe</p>
                <p className="app-sidebar__user-designation">Frontend Developer</p>
              </div>
            </div>
            <ul className="app-menu">
              <li><a className="app-menu__item active" href="/"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></a></li>

            {this.getDomaines().map((domaine, i) => {
                console.log(this.props.langue)
                return (
                  <SidebarItem key={i} title={domaine[this.props.langue].name} />
              )}
            )}

              

            </ul>
          </aside>
        );
    }
}

export default Sidebar;