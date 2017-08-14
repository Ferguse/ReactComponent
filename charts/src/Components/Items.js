import React from 'react';

const Item = (props) => {
    return (
        <div className={"Charts--item " + props.className} style={ props.style } key={ props.itemIndex }>
            <b style={{ color: props.color }}>{ props.item }</b>
        </div>
    );
}

export default Item;