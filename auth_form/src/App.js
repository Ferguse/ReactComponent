import React, { Component } from 'react';
import './App.css';

class AuthForm extends Component {
    constructor (props) {
        super(props);
        this.changeMail = this.changeMail.bind(this);
        this.changePass = this.changePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changeMail (event) {
        let value = event.target.value;
        let lastLetter = value[value.length - 1];
        let result = value => { event.target.value = value; }
        console.log(lastLetter);
        if (!value || !lastLetter) result(''); return;
        if ( lastLetter.charCodeAt(0) > 47 && lastLetter.charCodeAt(0) < 58 ) return result(value);
        if ( lastLetter.charCodeAt(0) > 63 && lastLetter.charCodeAt(0) < 91 ) return result(value);
        if ( lastLetter.charCodeAt(0) > 96 && lastLetter.charCodeAt(0) < 123 ) return result(value);
        if ( lastLetter.charCodeAt(0) === 45 || lastLetter.charCodeAt(0) === 46 || lastLetter.charCodeAt(0) === 95 ) return result(value);
        event.target.value = value.slice(0,-1);
    }

    changePass (event) {
        let value = event.target.value;
        let lastLetter = value[value.length - 1] || ' ';
        let result = value =>{ event.target.value = value; }

        if (!value || !lastLetter) result(''); return;
        if ( lastLetter.charCodeAt(0) > 47 && lastLetter.charCodeAt(0) < 58 ) return result(value);
        if ( lastLetter.charCodeAt(0) > 64 && lastLetter.charCodeAt(0) < 91 ) return result(value);
        if ( lastLetter.charCodeAt(0) > 96 && lastLetter.charCodeAt(0) < 123 ) return result(value);
        if ( lastLetter.charCodeAt(0) === 95) return result(value);
        event.target.value = value.slice(0,-1);
    }

    onSubmit (event) {
        event.preventDefault();

        let result = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        if (this.props.onAuth && typeof this.props.onAuth === 'function') this.props.onAuth(result);
    }

    render () {
        return (
            <form className="ModalForm" action="/404/auth/" method="POST" onSubmit={ this.onSubmit }>
                <div className="Input">
                    <input required type="text" placeholder="Имя" name="name"/>
                    <label></label>
                </div>
                <div className="Input">
                    <input type="email" placeholder="Электронная почта" name="email" onChange={ this.changeMail }/>
                    <label></label>
                </div>
                <div className="Input">
                    <input required type="password" placeholder="Пароль" name="password" onChange={ this.changePass }/>
                    <label></label>
                </div>
                <button type="submit">
                    <span>Войти</span>
                    <i className="fa fa-fw fa-chevron-right"></i>
                </button>
            </form>

        )
    }
}

const Modal = props => {
    if (props.isHidden) {
        return null;
    }
    return (
        <div className="Modal">
            {props.children}
        </div>
    );
};

const ModalResult = props => {
    if (props.isHidden) {
        return null;
    }
    return (
        <div className="Modal ModalResult">
            {props.children}
        </div>
    );
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUnauthorized: true,
            user: {}
        }
    }

    auth(user) {
        this.setState({isUnauthorized: false, user});
    }

    render() {
        return (
            <div className="App">
                <Modal isHidden={!this.state.isUnauthorized}>
                    <AuthForm onAuth={this.auth.bind(this)} />
                </Modal>
                <ModalResult isHidden={this.state.isUnauthorized}>
                    <div className="ModalForm">
                        <div className="Input">
                            <output data-name>{this.state.user.name}</output>
                            <label />
                        </div>
                        <div className="Input">
                            <output data-email>{this.state.user.email}</output>
                            <label />
                        </div>
                        <div className="Input">
                            <output data-password>{this.state.user.password}</output>
                            <label />
                        </div>
                    </div>
                </ModalResult>
            </div>
        );
    }
}

export default App;
