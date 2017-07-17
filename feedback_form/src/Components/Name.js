import React, {Component} from 'react';

const Name = props => {
    return (
        <div className="contact-form__input-group">
            <label className="contact-form__label" htmlFor="name">Имя</label>
            <input
                className="contact-form__input contact-form__input--text"
                id="name"
                name="name"
                type="text"
                defaultValue={props.name}
            />
        </div>
    )
}

export default Name;