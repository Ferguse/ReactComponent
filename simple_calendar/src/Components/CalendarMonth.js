import React, { Component } from 'react';
import month from './month';

const now = new Date();
class CalendarMonth extends React.Component {
    render () {
        return (
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{month[now.getMonth()].name}</span>&nbsp;<span class="ui-datepicker-year">{now.getFullYear()}</span>
                </div>
            </div>
        )
    }
}

export default CalendarMonth;