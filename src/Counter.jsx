import { useEffect, useState } from "react";


const Counter = () => {
    const [count, setCount] = useState(0);
    const[name, setName] = useState("")
    useEffect( function myEffect(){
        console.log("My effect was called!");
    },[count]);

    const increment = () => {
        setCount(c => c + 1);
    };

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (  
        <div className="counter">
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name : {name}</p>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}
 
export default Counter;