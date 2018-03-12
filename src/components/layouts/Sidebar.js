import React, { Component } from 'react';

class Sidebar extends Component {
    getDomaines = () => { return Object.values(this.props.domaines) }


    render(props) {
        /*
                      {Object.keys(this.props.domaines).map(domaine => (
                <li><a className="app-menu__item" href="charts.html"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">{this.props.domaines[this.props.langue].name}</span></a></li>
              )
              )}
            {this.getDomaines().map(domaine => (
              <li><a className="app-menu__item" href="charts.html"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">{this.props.domaines.fr.name}</span></a></li>
              )
            )}
            Object.values(this.props.domaines).map(domaine => {console.log("dod : ",domaine)})
             console.dir("object : " , Object.entries(this.props.domaines).reduce((acc, domaine) => {
                 acc.push(domaine[1])
                 return acc
                },[]))
              */

        return (
            <aside className="app-sidebar">
            <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image" />
              <div>
                <p className="app-sidebar__user-name">John Doe</p>
                <p className="app-sidebar__user-designation">Frontend Developer</p>
              </div>
            </div>
            <ul className="app-menu">
              <li><a className="app-menu__item active" href="index.html"><i className="app-menu__icon fa fa-dashboard"></i><span className="app-menu__label">Dashboard</span></a></li>

            {this.getDomaines().map(domaine => {
                console.log(this.props.langue)
                return (
              <li><a className="app-menu__item" href="charts.html"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">{domaine[this.props.langue].name}</span></a></li>
              )}
            )}

              

            </ul>
          </aside>
        );
    }
}

export default Sidebar;