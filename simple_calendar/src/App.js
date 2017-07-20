import React, { Component } from 'react';
import './App.css';
import CalendarHeader from './Components/CalendarHeader';
import CalendarMonth from './Components/CalendarMonth';
import CalendarTable from './Components/CalendarTable';

class Calendar extends React.Component {
    render () {
        return (
            <div className="ui-datepicker">
                <CalendarHeader date={this.props.date}/>
                <CalendarMonth date={this.props.date}/>
                <CalendarTable date={this.props.date}/>
            </div>
        );
    }
}

const now = new Date();


export default Calendar;
