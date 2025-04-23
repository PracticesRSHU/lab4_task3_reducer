
import { useDispatch } from "react-redux";
import { COUNTER_ACTION_TYPES, decrement} from "../store/reducers/counterReducer";
// Робота зі змінною стану
const ButtonMinus = () => {
    const discpatch=useDispatch();  //{type COUNTER_ACTION_TYPES.DECREMENT}

    const minus=()=>discpatch(decrement());

    return (
        // <button onClick={()=>discpatch({type: COUNTER_ACTION_TYPES.DECREMENT })}> -- </button>
        // <button onClick={()=>discpatch(decrement)}> -- </button>
        <button onClick={minus}> -- </button>

    );
}

export default ButtonMinus;