// ініціалізація пачаткового значення стану
let count = 1;
const COUNT_DATA = {
    count: 0,
    title: "No name"
}

//-------------REDUCER
// reducer=(state, action)=>{
//     return {new state}
// }

// //using state=count
// export const counterReducer = (state = count, action) => {
//     // type => тип дії
//     // payload => дані для роботи в action, що викорисовуються для зиіни стнау  
//     const { type, payload } = action;
//     console.log(type, payload)
//     switch (type) {
//         case COUNTER_ACTION_TYPES.INCREMENT:
//             return state + 1;
//         case COUNTER_ACTION_TYPES.DECREMENT:
//             return state - 1;
//         case COUNTER_ACTION_TYPES.RESET:
//             return 0;
//         case COUNTER_ACTION_TYPES.INCREMENTBYN:
//             return state + payload.n;
//         default:
//             return state;
//         // throw new Error("Invalid action type") 
//     }
// }

//===================
//using state=COUNT_DATA object
export const counterReducer = (state = COUNT_DATA, action) => {
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

// ==========================ACTIONS===============
export const decrement=()=>({type: COUNTER_ACTION_TYPES.DECREMENT });
export const increment=()=>({type: COUNTER_ACTION_TYPES.INCREMENT });
export const reset=()=>({type: COUNTER_ACTION_TYPES.RESET});
export const increment_by_n=(n)=>({type: COUNTER_ACTION_TYPES.INCREMENTBYN,payload: {n} });
//======================SELECTORS======================
// export const selectCount=(state)=>state;
//=============
// export const selectCount=(state)=>state.count;
// export const selectTitle=(state)=>state.userName;
//========= using rootReducer.js
export const selectCount=(store)=>store.counter.count;
export const selectTitle=(store)=>store.counter.title;
