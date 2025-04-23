import { useContext } from "react";
import { CounterContext } from "../context/counterContextWithReducer";

const ButtonPlus = () => {
   let  {count, title, dec, inc, res, inc_by_n}=useContext(CounterContext);
   console.log(count,title);
    return (
        <button onClick={()=>inc()}> ++ Context </button>
    );
}

export default ButtonPlus;