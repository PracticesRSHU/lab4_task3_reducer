import { createContext, useReducer } from "react";

export const CounterContext = createContext(null);
// ініціалізація пачаткового значення стану
const COUNT_DATA2 = {
    count: 0,
    title: "Counter 0"
}

//-------------REDUCER
// reducer=(state, action)=>{
//     return {new state}
// }


//===================
//using state=COUNT_DATA object
export const counterReducer2 = (state = COUNT_DATA2, action) => {
    // type => тип дії
    // payload => дані для роботи в action, що викорисовуються для зиіни стнау  
    const { type, payload } = action;
    console.log(type, payload)
    switch (type) {
        case COUNTER_ACTION_TYPES.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case COUNTER_ACTION_TYPES.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };;
        case COUNTER_ACTION_TYPES.RESET:
            return {
                ...state,
                count: 0
            };;
        case COUNTER_ACTION_TYPES.INCREMENTBYN:
            return {
                ...state,
                count: state.count + payload.n
            };
        default:
            return state;
        // throw new Error("Invalid action type") 
    }
}

//==========TYPES=====
export const COUNTER_ACTION_TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET",
    INCREMENTBYN: "INCREMENTBYN"
}


export default function CounterProvider(props) {
    const [{ count, title }, dispatch] = useReducer(counterReducer2, COUNT_DATA2);

    const dec = () => dispatch({ type: COUNTER_ACTION_TYPES.DECREMENT });
    const inc = () => dispatch({ type: COUNTER_ACTION_TYPES.INCREMENT });
    const res = () => dispatch({ type: COUNTER_ACTION_TYPES.RESET });
    const inc_by_n = (n) => dispatch({ type: COUNTER_ACTION_TYPES.INCREMENTBYN, payload: { n } });
    const value = { count, title, dec, inc, res, inc_by_n };
    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
}