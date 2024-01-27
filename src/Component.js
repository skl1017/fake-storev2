import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from './state/counter/counterSlice'

function Component (){

    const dispatch=useDispatch();

    const counter = useSelector((state)=>state.counter);

    const handleIncrement=()=>{
        dispatch(increment());
    }
    const handleDecrement=()=>{
        dispatch(decrement());
    }

    return(
        <>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            
        </>
    )



}

export default Component