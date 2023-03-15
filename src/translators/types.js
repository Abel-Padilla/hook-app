export const getInfoType = (type) => {
    const types = [
        {
            name: 'normal',
            color: 'withe',
            'backgroundColor': 'orange'
        },
        {
            name: 'fighting',
            color: 'withe',
            'backgroundColor': 'red'
        },
        {
            name: 'flying',
            color: 'withe',
            'backgroundColor': 'cyan'
        },
        {
            name: 'poison',
            color: 'withe',
            'backgroundColor': 'purple'
        },
        {
            name: 'ground',
            color: 'black',
            'backgroundColor': 'brown'
        },
        {
            name: 'rock',
            color: 'black',
            'backgroundColor': 'gray'
        },
        {
            name: 'bug',
            color: 'withe',
            'backgroundColor': 'rgeen'
        },
        {
            name: 'ghost',
            color: 'purple',
            'backgroundColor': 'black'
        },
        {
            name: 'steel',
            color: 'withe',
            'backgroundColor': 'gray'
        },
        {
            name: 'fire',
            color: 'red',
            'backgroundColor': 'orange'
        },
        {
            name: 'water',
            color: 'withe',
            'backgroundColor': 'blue'
        },
        {
            name: 'grass',
            color: 'black',
            'backgroundColor': 'green'
        },
        {
            name: 'electric',
            color: 'withe',
            'backgroundColor': 'yellow'
        },
        {
            name: 'psychic',
            color: 'purple',
            'backgroundColor': 'withe'
        },
        {
            name: 'ice',
            color: 'cyan',
            'backgroundColor': 'withe'
        },
        {
            name: 'dragon',
            color: 'green',
            'backgroundColor': 'red'
        },
        {
            name: 'dark',
            color: 'withe',
            'backgroundColor': 'black'
        },
        {
            name: 'fairy',
            color: 'pink',
            'backgroundColor': 'withe'
        },
        {
            name: 'unknown',
            color: 'black',
            'backgroundColor': 'withe'
        },
        {
            name: 'shadow',
            color: 'brown',
            'backgroundColor': 'gray'
        }
    ];
    return types.filter(n => n.name == type)[0]
}