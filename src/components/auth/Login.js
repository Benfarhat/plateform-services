import React, { Fragment, Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <section className="material-half-bg">
                    <div className="cover red-bg"></div>
                    </section>
                    <section className="login-content">
                    <div className="logo">
                        <h1>Administration</h1>
                    </div>
                    <div className="login-box">
                        <form className="login-form" action="index.html">
                        <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>CONNEXION</h3>
                        <div className="form-group">
                            <label className="control-label">IDENTIFIANT</label>
                            <input className="form-control" type="text" placeholder="Email" autofocus />
                        </div>
                        <div className="form-group">
                            <label className="control-label">MOT DE PASSE</label>
                            <input className="form-control" type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="utility">
                            <div className="animated-checkbox">
                                                                <label>
                                <input type="checkbox" /><span className="label-text">Rester connecter</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="form-group btn-container">
                            <button className="btn btn-danger btn-block"><i className="fa fa-sign-in fa-lg fa-fw"></i>SE CONNECTER</button>
                        </div>
                        </form>
                    </div>
                    </section>  
            </Fragment>
        )
    }
}
