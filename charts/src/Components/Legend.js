import React from 'react';
const Legend = (props) => {
    return (
        <div className="Legend">
            { props.labels.map((label, labelIndex) => {
                return (
                    <div key={Math.floor(Math.random() * 100000)}>
                        <span className="Legend--color" style={{ backgroundColor: props.colors[labelIndex % props.colors.length]  }} />
                        <span className="Legend--label">{ label }</span>
                    </div>
                );
            }) }
        </div>
    );
}

export default Legend;