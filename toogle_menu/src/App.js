import React, {Component} from 'react';
import './App.css';

const items = [
    {title: 'Главная страница', href: '#home'},
    {title: 'О компании', href: '#about'},
    {title: 'Контакты', href: '#contact'}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpened: false};
        this.toggleState = () => {
            this.setState({isOpened: !this.state.isOpened});
        }
        this.getElement = this.getElement.bind(this)
    }

    getElement() {
        if (this.state.isOpened) {
            return (
                <nav>
                    <ul>
                        {items.map(item=> {
                            return <li><a href={item.href}>{item.title}</a></li>
                        })}
                    </ul>
                </nav>
            )
        }
    }

    render() {
        return (
            <div onClick={this.toggleState} className="menu menu-open">
                <div className="menu-toggle"><span></span></div>
                {this.getElement()}
            </div>
        );
    }
}

export default App;
