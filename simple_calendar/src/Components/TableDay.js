import React, { Component } from 'react';
class TableDay extends React.Component {
    render () {
        return <td className={this.props.className}>{this.props.date}</td>
    }
}

export default TableDay;