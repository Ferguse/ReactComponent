import React, {Component} from 'react';

const Message = props => {
    return (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="message">Ваше сообщение</label>
            <textarea className="contact-form__input contact-form__input--textarea" id="message" name="message" rows="6" cols="65" defaultValue={props.message}></textarea>
        </div>
    )
}

export default Message;