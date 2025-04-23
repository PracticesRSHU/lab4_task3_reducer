import { useContext } from "react";
import ButtonMinus from "./ButtonMinus";
import ButtonPlus from "./ButtonPlus";
import FieldCounter from "./FieldCounter";
import ResetButton from "./ResetButton";
import ButtonPlusN from "./ButtonPlusN";
import { useSelector } from "react-redux";
import { selectTitle } from "../store/reducers/counterReducer";


const Counter=()=>{
    const userTitle=useSelector(selectTitle);
    return(
        <div className="counter">
            <h3>{userTitle}</h3>
            <FieldCounter/>
            <ButtonMinus />
            <ButtonPlus/>
            <ResetButton/>
            <ButtonPlusN/>
        </div>
    );
}

export default Counter;