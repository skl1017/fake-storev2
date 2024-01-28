import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import {increment, decrement} from './state/counter/counterSlice'
import { useEffect } from "react";

const fetchData = async (req) =>{
    const res = await fetch(req);
    const data = await res.json();
    return data;
  }

function Component (){

    const dispatch=useDispatch();
    const counter = useSelector((state)=>state.counter);

    const handleIncrement=()=>{
        dispatch(increment());
    }
    const handleDecrement=()=>{
        dispatch(decrement());
    }

    
      
    const {data, error, isLoading} = useQuery('data', () => fetchData('https://jsonplaceholder.typicode.com/todos/1'))

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    console.log(data)

    return(
        <>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            
        </>
    )



}

export default Component