import React, { Component } from 'react';
import TableRow from './TableRow'

class TableBody extends React.Component {
    render () {
        const weeks = [0, 1, 2, 3, 4];
        return (
            <tbody>
            { weeks.map( (item, i) => { return <TableRow countWeek={i}/> }) }
            </tbody>
        )
    }
}

export default TableBody;