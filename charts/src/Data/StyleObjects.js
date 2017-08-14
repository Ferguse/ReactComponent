const arr = [
    { name: 'first',
        className: 'Charts',
        styleName: '',
        isChangeHeight: true,
        getStyle: (...arr) => {
            let [color, item, size, max] = [...arr];
            return {
                backgroundColor: color,
                opacity: item/max + .05,
                zIndex: item,
                height: size + '%'
            };
        }
    },
    {
        name: 'second',
        className: 'Charts',
        styleName: 'stacked',
        isChangeHeight: false,
        getStyle: (...arr) => {
            let [color, item, size] = [...arr];
            return {
                backgroundColor: color,
                opacity: 1,
                zIndex: item,
                height: size + '%'
            };
        }
    },
    {
        name: 'third',
        className: 'Charts',
        styleName: 'layered',
        isChangeHeight: true,
        getStyle: (...arr) => {
            let [color, item, size, max, sortedSerie, serie] = [...arr];
            return {
                backgroundColor: color,
                opacity: (item/max + .05),
                zIndex: item,
                height: size + '%',
                right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
            };
        }
    },
    {
        name: 'fourth',
        className: 'Charts horizontal',
        styleName: '',
        isChangeHeight: true,
        getStyle: (...arr) => {
            let [color, item, size, max] = [...arr];
            return {
                backgroundColor: color,
                opacity: (item/max + .05),
                zIndex: item,
                width: size + '%'
            };
        }
    }
]

export default arr;
