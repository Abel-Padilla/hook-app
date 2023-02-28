export const getInfoType = ({ type }) => {
    const types = [
        {
            name: 'normal',
            color: 'withe',
            'background-color': 'orange'
        },
        {
            name: 'fighting',
            color: 'withe',
            'background-color': 'red'
        },
        {
            name: 'flying',
            color: 'withe',
            'background-color': 'cyan'
        },
        {
            name: 'poison',
            color: 'withe',
            'background-color': 'purple'
        },
        {
            name: 'ground',
            color: 'black',
            'background-color': 'brown'
        },
        {
            name: 'rock',
            color: 'black',
            'background-color': 'gray'
        },
        {
            name: 'bug',
            color: 'withe',
            'background-color': 'rgeen'
        },
        {
            name: 'ghost',
            color: 'purple',
            'background-color': 'black'
        },
        {
            name: 'steel',
            color: 'withe',
            'background-color': 'gray'
        },
        {
            name: 'fire',
            color: 'red',
            'background-color': 'orange'
        },
        {
            name: 'water',
            color: 'withe',
            'background-color': 'blue'
        },
        {
            name: 'grass',
            color: 'black',
            'background-color': 'green'
        },
        {
            name: 'electric',
            color: 'withe',
            'background-color': 'yellow'
        },
        {
            name: 'psychic',
            color: 'purple',
            'background-color': 'withe'
        },
        {
            name: 'ice',
            color: 'cyan',
            'background-color': 'withe'
        },
        {
            name: 'dragon',
            color: 'green',
            'background-color': 'red'
        },
        {
            name: 'dark',
            color: 'withe',
            'background-color': 'black'
        },
        {
            name: 'fairy',
            color: 'pink',
            'background-color': 'withe'
        },
        {
            name: 'unknown',
            color: 'black',
            'background-color': 'withe'
        },
        {
            name: 'shadow',
            color: 'brown',
            'background-color': 'gray'
        }
    ];
    return types.filter(n=>n.name == type)
}