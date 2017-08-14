import React, { Component } from 'react';
import Chart from './Chart';
import Legend from './Legend';
import arr from '../Data/StyleObjects';
import startData from '../Data/startData';


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



class Wrapp extends Component {
    componentWillMount() {
        this.setState(startData)
    }

    componentDidMount() {
        this.populateArray();
        setInterval(this.populateArray.bind(this), 2000);
    }

    populateArray() {
        const	series = 5;
        const serieLength = 5;

        let data = new Array(series).fill(new Array(serieLength).fill(0));
        data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

        this.setState({ data });
    }

    render () {
        const { data, colors, labels, series } = this.state;
        const max = data.reduce((max, serie) => Math.max(max, serie.reduce((serieMax, item) => Math.max(serieMax, item), 0)), 0);

        return (
            <section>
                { arr.map( item => {
                    return <Chart item={item} series={ series } labels={ labels } colors={ colors } state={this.state}  max={ max } key={Math.floor(Math.random() * 100000)}/>
                }) }
                <Legend colors={colors} labels={labels} key={Math.floor(Math.random() * 100000)}/>
            </section>
        );
    }
}

export default Wrapp;