import React, { Component } from 'react';
import daysOfWeek from './days';

class TableHeader extends React.Component {
    render () {
        return (
            <thead>
            <tr>
                {daysOfWeek.map(item=>{ return <th scope="col" title={item.name}>{item.shortName}</th> })}
            </tr>
            </thead>
        )
    }
}

export default TableHeader;