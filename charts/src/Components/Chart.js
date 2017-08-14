import Container from './Container';
import React from 'react';

function compareNumbers(a, b) {
    return a - b;
}
const Chart = (props) => {
    let { item } = props;
    let { data } = props.state;

    return (
        <div className={item.className}>
            { data.map((serie, serieIndex) => {
                var sortedSerie = serie.slice(0);
                var sum = serie.reduce((carry, current) => carry + current, 0);
                sortedSerie.sort(compareNumbers);

                return <Container desc={ props } sortedSerie={ sortedSerie } sum={ sum } serie={ serie } key={Math.floor(Math.random() * 100000)}/>
            })
            }
        </div>
    )
}

export default Chart;