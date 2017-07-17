import React, {Component} from 'react';

let salutation = [
    {
        id: 'salutation-mr',
        value: 'Мистер',
        checked: false,
    },
    {
        id: 'salutation-mrs',
        value: 'Мисис',
        checked: false
    },
    {
        id: 'salutation-ms',
        value: 'Мис',
        checked: false
    },
]
const Radio = (props) => {
    return (
        <div className="contact-form__input-group">
            {
                salutation.map(item => {
                    let {id, value} = item;
                    return (
                        <span>
                            <input key={ id } className="contact-form__input contact-form__input--radio" id={ id } name="salutation" type="radio" defaultChecked={ value === props.salutation } value={ value }/>
                            <label className="contact-form__label contact-form__label--radio" htmlFor="salutation-mr">{ value }</label>
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Radio;