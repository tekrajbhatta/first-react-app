import React, {useState} from 'react'
import Products from './Products'
import Colors from './Colors';
import Counter from './Counter';
import Tailwindlearn from './Tailwindlearn';
import Card from './Card';

function App() {
  var [a, b] = useState(0);
  let myObj = {
    userName: "SaggyBoy",
    email: "saggy@gmail.com",
    age: 25
  };
  let newArr = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="w-ful min-h-screen bg-zinc-900 p-4">
        <div className="w-44 h-32 rounded-xl bg-red-600 p-3 text-white">
          <h3>Hello World!</h3>
        </div>
        <Products />
        <div className="w-ful min-h-96 bg-orange-950 p-4 text-white">
          <p>Counter Example</p>
          <br />
          <h1>Count is: {a}</h1>
          <br />
          <button onClick={() => b(a+1)} className='px-6 py-3 bg-green-500 rounded-md text-sm'>Click</button>
        </div>
        <Colors />
        <Counter />
        <Card mycardname="Test Card 1" btnText="Click me" someObj={myObj} someArr={newArr} />
        <Card mycardname="Test Card 2" />
        <Tailwindlearn />
      </div>
    </>
  );
}

export default App
