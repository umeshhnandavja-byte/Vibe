import React, {useState} from "react"
import Counter from "./Counter";

function MyComponent(){

   const [name, setName] = useState("Guest");
   const [age, setAge] = useState(0);

    const updateName = () => {
        setName("Umeshh Nanda");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    return( <>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
                
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>

                <Counter/>
            </>);

}

export default MyComponent