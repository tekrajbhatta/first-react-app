import { useState } from "react";

function Counter() {
    // let count = 0;

    let [count, setCount] = useState(0);

    const addCount = () => {
        if(count < 20) {
            count = count + 1;
            setCount(count)
            // console.log('Count value is: ' + count);
        }
    }

    const removeCount = () => {
        if(count > 0 ) {
            count = count - 1;
            setCount(count)
            // console.log('Count value is: ' + count);
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