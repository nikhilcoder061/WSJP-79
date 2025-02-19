import React, { useEffect, useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const inc = () => {
    setCount(count + 1); // count =1
  }

  const decs = () => {
    setCount(count - 1);
  }


  useEffect(
    () => {
      setPrice(count * 100); // 1*100 = 100
    }, [count] // function, depenedency - 
  )



  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Counter</h2>
      <div className="flex justify-center items-center space-x-4 gap-[20px]">
        <button onClick={decs} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          -
        </button>
        <span className="text-3xl font-bold text-gray-800" id="counterValue">
          Count is {count}
        </span>
        <span className="text-3xl font-bold text-gray-800" id="counterValue">
          Price is {price}
        </span>
        <button onClick={inc} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          +
        </button>
      </div>
    </div>

  )
}
