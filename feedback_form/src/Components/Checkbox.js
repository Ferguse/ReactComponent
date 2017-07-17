import React, {Component} from 'react';

const Checkbox = props => {
    return (
        <div class="contact-form__input-group">
            <p class="contact-form__label--checkbox-group">Хочу получить:</p>
            <input className="contact-form__input contact-form__input--checkbox" defaultChecked={ props.getDefaultCheck('пицца') } id="snacks-pizza" name="snacks" type="checkbox"
                   value="пицца"/>
            <label className="contact-form__label contact-form__label--checkbox" for="snacks-pizza">Пиццу</label>
            <input className="contact-form__input contact-form__input--checkbox" defaultChecked={ props.getDefaultCheck('пирог') } id="snacks-cake" name="snacks" type="checkbox"
                   value="пирог"/>
            <label className="contact-form__label contact-form__label--checkbox" for="snacks-cake">Пирог</label>
        </div>
    )
}

export default Checkbox;