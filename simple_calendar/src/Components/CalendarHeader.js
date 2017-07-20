import React, { Component } from 'react';
import daysOfWeek from './days';
import month from './month';

const now = new Date();

class CalendarHeader extends React.Component {
    render () {
        return (
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{daysOfWeek[now.getDay()].name}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{now.getDate()}</div>
                    <div className="ui-datepicker-material-month">{month[now.getMonth()].changeName}</div>
                    <div className="ui-datepicker-material-year">{now.getFullYear()}</div>
                </div>
            </div>
        )
    }
}
export default CalendarHeader;