import React, { Component } from 'react';
import TableDay from './TableDay'
import daysOfWeek from './days';
import month from './month';

const now = new Date();
class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    render () {
        const countFirstDay = 6 - new Date(now.getFullYear(), now.getMonth(), 1).getDay();
        const maxDay = month[now.getMonth()].lastDay;

        return (
            <tr>
                {daysOfWeek.map((item, i) => {

                    if ( this.props.countWeek === 0 ) {
                        if (i <= countFirstDay) {
                            const arr = month[now.getMonth() - 1].lastWeek;
                            return <TableDay date={arr[arr.length - countFirstDay - 1 + i]} className='ui-datepicker-other-month'/>
                        } else {
                            this.state.count = this.state.count + 1 + this.props.countWeek * 7;
                            if (this.state.count === now.getDate()) return <TableDay date={this.state.count} className='ui-datepicker-today'/>
                            return <TableDay date={this.state.count} className=''/>
                        }
                    } else {
                        let date = this.state.count + this.props.countWeek * 7 - countFirstDay;

                        if (date <= maxDay) {
                            this.state.count = this.state.count + 1;
                            if (date === now.getDate()) return <TableDay date={date} className='ui-datepicker-today'/>
                            return <TableDay date={date} className=''/>
                        } else {
                            this.state.count = this.state.count + 1;
                            return <TableDay date={date - maxDay} className='ui-datepicker-other-month'/>
                        }
                    }
                })}
            </tr>
        )
    }
}

export default TableRow;