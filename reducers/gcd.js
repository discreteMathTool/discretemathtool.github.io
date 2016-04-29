import { GENERATE_GCD_EXAMPLE } from '../constants'

const examples = [
    {
        input : [178, 24],
        table : [
            [178, 24, 10, 4, 2, 0],
            ['', '', 7, 2, 2, 2],
        ],
        output : 2,
    },
    {
        input : [235, 80],
        table : [
            [235, 80, 75, 5, 0],
            ['', '', 2, 1, 15],
        ],
        output : 5,
    },
]

const gcd = (state = {}, action) => {
    switch (action.type) {
        case GENERATE_GCD_EXAMPLE:
            do {
                let newExample = examples[Math.floor(Math.random() * examples.length)]
            }
            while (JSON.stringify(newExample) != JSON.stringify(state))
            return newExample
        default:
            return state
    }
}

export default gcd
