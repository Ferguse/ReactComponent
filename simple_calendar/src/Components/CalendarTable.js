import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
class CalendarTable extends React.Component {
    render () {
        return (
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col/>
                    <col className="ui-datepicker-week-end"/>
                    <col className="ui-datepicker-week-end"/>
                </colgroup>
                <TableHeader/>
                <TableBody/>
            </table>
        )
    }
}
export default CalendarTable;