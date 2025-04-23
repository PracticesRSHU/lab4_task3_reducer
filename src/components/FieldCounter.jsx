import { useSelector } from "react-redux";
import { selectCount } from "../store/reducers/counterReducer";
import { useContext } from "react";
import { CounterContext } from "../context/counterContextWithReducer";
const FieldCounter = () => {
    // console.log(data);
    // const countByRedux=useSelector((state)=>state);
    const countByRedux=useSelector(selectCount);
    const {count} = useContext(CounterContext);
    return (
        <div className="feiald">
            <p>Counter with Reducer: {countByRedux}</p>
            <p>Counter from Context with using useReducer: {count}</p>
        </div>
    );
}

export default FieldCounter;