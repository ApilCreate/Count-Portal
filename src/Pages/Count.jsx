import React, { useState } from 'react'

export function Count() {
    const [count, setCount] = useState(0)
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 overflow-hidden">
            <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black w-3/5 container rounded-3xl p-10 my-4 shadow-2xl transform transition duration-500 hover:scale-105'>
                <div className='Main gap-3 text-center'>
                    <h1 className='text-5xl text-white font-extrabold my-5 animate-pulse'>
                        Counting Portal
                    </h1>
                    <p className='text-2xl text-gray-300 font-light mb-8'>
                        Let's see how much you can count 😏😜
                    </p>
                </div>
                <div className='my-3'>
                    <h1 className='text-4xl font-bold text-white'>
                        Your score: {count}
                    </h1>
                </div>
                <div className='my-10 flex justify-center gap-5'>
                    <button 
                        className='text-2xl font-bold border-2 border-dotted border-indigo-300 p-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-200 transform hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-indigo-500'
                        onClick={() => setCount(count + 1)}
                    >
                        Count me
                    </button>
                    <button 
                        className='text-2xl font-bold border-2 border-dotted border-red-300 p-5 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-pink-500 hover:to-red-500 transition-all duration-200 transform hover:scale-110 hover:-rotate-1 shadow-lg hover:shadow-red-500'
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}
