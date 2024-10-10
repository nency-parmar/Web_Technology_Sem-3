import react ,{useState} from "react";

const UseState = ()=>{
    const[count , setCount] = useState(0);
    const increment = () => {
        setCount (count + 200);
    }

    const decrement = () => {
        setCount (count - 100);
    }

    return (
        <>
            <p>
                {count}
            </p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default UseState;