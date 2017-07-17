import React, {Component} from 'react';

const Select = props => {
    return (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="subject">Чем мы можем помочь?</label>
            <select className="contact-form__input contact-form__input--select" id="subject" name="subject" defaultValue={ props.select }>
                <option value="У меня проблема">У меня проблема</option>
                <option value="У меня важный вопрос">У меня важный вопрос</option>
            </select>
        </div>
    )
}

export default Select;