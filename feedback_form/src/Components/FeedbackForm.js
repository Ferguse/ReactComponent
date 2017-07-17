import React, {Component} from 'react';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Name from './Name';
import Mail from './Email';
import Message from './Message';
import Select from './Select';

class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.getDefaultCheck = this.getDefaultCheck.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

    }

    handleFormSubmit(event) {
        event.preventDefault();
        let target = event.target;
        let snacks = Array.from(target.snacks).filter(item=> {
            return item.checked
        }).map(item=> {
            return item.value
        })

        let result = {
            salutation: target.salutation.value,
            name: target.name.value,
            subject: target.subject.value,
            message: target.message.value,
            email: target.email.value,
            snacks: snacks
        }

        console.log('You have selected:', JSON.stringify(result));
        return JSON.stringify(result);
    }

    getDefaultCheck(value) {
        if (this.props.data.snacks instanceof Array) return this.props.data.snacks.indexOf(value) >= 0;
    }

    render() {
        return (
            <form className="content__form contact-form" onSubmit={ this.handleFormSubmit }>
                <div className="testing">
                    <p>Чем мы можем помочь?</p>
                </div>
                <Radio salutation={ this.props.data.salutation }/>
                <Name name={ this.props.data.name }/>
                <Mail email={ this.props.data.email }/>
                <Select select={ this.props.data.subject }/>
                <Message message={ this.props.data.message }/>
                <Checkbox getDefaultCheck={ this.getDefaultCheck }/>
                <button className="contact-form__button" type="submit">Отправить сообщение!</button>
                <output id="result"/>
            </form>
        )
    }
}


export default FeedbackForm;
