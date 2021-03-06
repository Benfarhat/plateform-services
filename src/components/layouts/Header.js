import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    render(props) {
        return (
            <header className="app-header"><a className="app-header__logo" href="index.html">{this.props.application.title}</a>
            <ul className="app-nav">
              <li className="app-search">
                <input className="app-search__input" type="search" placeholder={this.props.application.search} />
                <button className="app-search__button"><i className="fa fa-search"></i></button>
              </li>
              <li className="dropdown"><a className="app-nav__item" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg"></i></a>
                <ul className="app-notification dropdown-menu dropdown-menu-right">
                  <li className="app-notification__title">You have 4 new notifications.</li>
                  <div className="app-notification__content">
                    <li><a className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                        <div>
                          <p className="app-notification__message">Lisa sent you a mail</p>
                          <p className="app-notification__meta">2 min ago</p>
                        </div></a></li>
                    <li><a className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                        <div>
                          <p className="app-notification__message">Mail server not working</p>
                          <p className="app-notification__meta">5 min ago</p>
                        </div></a></li>
                    <li><a className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                        <div>
                          <p className="app-notification__message">Transaction complete</p>
                          <p className="app-notification__meta">2 days ago</p>
                        </div></a></li>
                    <div className="app-notification__content">
                      <li><a className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary"></i><i className="fa fa-envelope fa-stack-1x fa-inverse"></i></span></span>
                          <div>
                            <p className="app-notification__message">Lisa sent you a mail</p>
                            <p className="app-notification__meta">2 min ago</p>
                          </div></a></li>
                      <li><a className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger"></i><i className="fa fa-hdd-o fa-stack-1x fa-inverse"></i></span></span>
                          <div>
                            <p className="app-notification__message">Mail server not working</p>
                            <p className="app-notification__meta">5 min ago</p>
                          </div></a></li>
                      <li><a className="app-notification__item"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success"></i><i className="fa fa-money fa-stack-1x fa-inverse"></i></span></span>
                          <div>
                            <p className="app-notification__message">Transaction complete</p>
                            <p className="app-notification__meta">2 days ago</p>
                          </div></a></li>
                    </div>
                  </div>
                  <li className="app-notification__footer"><a>See all notifications.</a></li>
                </ul>
              </li>
              <li className="dropdown"><a className="app-nav__item" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg"></i></a>
                <ul className="dropdown-menu settings-menu dropdown-menu-right">
                  <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg"></i> Settings</a></li>
                  <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg"></i> Profile</a></li>
                  <li><a className="dropdown-item" href="page-login.html"><i className="fa fa-sign-out fa-lg"></i> Logout</a></li>
                </ul>
              </li>
            </ul>
          </header>
        );
    }
}

Header.propTypes = {
  application: PropTypes.object.isRequired
};

Header.defaultProps = {
  application: {
    title: 'title',
    search: 'search'
  }
};

export default Header;