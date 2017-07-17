import React, {Component} from 'react';

const Mail = props => {
    return (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="email">Адрес электронной почты</label>
            <input className="contact-form__input contact-form__input--email" id="email" name="email" type="email" defaultValue={ props.email }/>
        </div>
    )
}

export default Mail;