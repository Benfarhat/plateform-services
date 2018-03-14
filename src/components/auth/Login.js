import React, { Fragment, Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'test',
            password: 'pass',
            remember: true,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if(e.target.type==="checkbox"){
            this.setState({remember: !this.state.remember})
        } else {
            const { name, value } = e.target;
            this.setState({ [name]: value });
        }
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        
        /*
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
        */
    }

    render() {

        const { username, password, remember } = this.state;

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
                        <form className="login-form" onSubmit={this.handleSubmit}>
                        <h3 className="login-head"><i className="fa fa-lg fa-fw fa-user"></i>CONNEXION</h3>
                        <div className="form-group">
                            <label className="control-label">IDENTIFIANT</label>
                            <input className="form-control" type="text" placeholder="Email" autoFocus name="username" value={username} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">MOT DE PASSE</label>
                            <input className="form-control" type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <div className="utility">
                            <div className="animated-checkbox">
                                                                <label>
                                <input type="checkbox" name="remember" defaultChecked={remember} onChange={this.handleChange}  /><span className="label-text">Rester connecter</span>
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
