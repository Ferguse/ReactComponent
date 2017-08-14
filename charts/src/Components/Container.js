import Item from './Items';
import React from 'react';

const Container = (props) => {
    let { serieIndex, sum, serie, sortedSerie } = props;
    let data = props.desc.item;
    let { labels, colors, max } = props.desc;

    return (
        <div className={ "Charts--serie " + data.styleName } key={ serieIndex } style={ {height: 250} }>
            <label>{ labels[serieIndex] }</label>
            { serie.map((item, itemIndex) => {
                let color = colors[itemIndex];
                let size = (data.isChangeHeight) ? item / (max) * 100 : item / sum * 100;
                let style = data.getStyle(color, item, size, max, sortedSerie, serie);

                return <Item style={ style } itemIndex={ itemIndex } color={color} item={item} className={data.styleName} key={Math.floor(Math.random() * 100000)}/>
            })
            }
        </div>
    );
}

export default Container;