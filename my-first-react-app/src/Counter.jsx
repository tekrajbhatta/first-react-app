import { useState } from "react";

function Counter() {
    // let count = 0;

    let [count, setCount] = useState(0);

    const addCount = () => {
        if(count < 20) {
            count = count + 1;
            setCount(count)
            
            // // Question:- What will be the output of following code when we click on Add Value button?
            // // count = count + 1;
            // // setCount(count)
            // // setCount(count)
            // // setCount(count)

            // // Answer:- 3 is wrong because useState sends the values to all the variables in UI in bacthes form(due to Fibre Algorithm), 
            // // so it understand above expression as, same repeated work with same batch value so it think the same batch values are coming and select the same value i.e. increment by 1 in this case
            // // get previous counter value 
            // // since any of the state, for eg: setCount in our case, is function which returns a value
            // // we can get the value of previous state and then upate it, so the code below will work
            // // here, the value of counter is coming through the callback so after the callback there will be another call so it udpates the value
            // setCount(counter => counter + 1)
            // setCount(counter => counter + 1)
            // setCount(counter => counter + 1)

            console.log('Count value is: ' + count);
        }
    }

    const removeCount = () => {
        if(count > 0 ) {
            count = count - 1;
            setCount(count)
            console.log('Count value is: ' + count);
        }
    }
    return(
        <>
            <div className="bg-gray-400 text-black p-4 pb-8 mb-8 min-h-48">
                <h1>Test Counter</h1>
                <h2>Counter Value: {count}</h2>
                <br />
                <button className="bg-green-400 text-white p-3" onClick={ addCount }>Add Value</button>
                <br />
                <br />
                <h3>Counter Value in H3 tag: {count}</h3>
                <br />
                <button className="bg-red-400 text-white p-3" onClick={ removeCount }>Remove Value</button>
                <br />
                <br />
                <p>Counter Value in a paragraph tag: {count}</p>
            </div>
        </>
    )
}

export default Counter;