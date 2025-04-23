
import { useDispatch} from "react-redux";
import { COUNTER_ACTION_TYPES, increment_by_n} from "../store/reducers/counterReducer";
const ButtonPlusN = () => {
    const discpatch=useDispatch();  //{type COUNTER_ACTION_TYPES.DECREMENT}
    return (
        // <button onClick={()=>discpatch({type: COUNTER_ACTION_TYPES.INCREMENTBYN,payload: 5 })}> +5 </button>
        <button onClick={()=>discpatch(increment_by_n(5))}> +5 </button>
    );
}

export default ButtonPlusN;