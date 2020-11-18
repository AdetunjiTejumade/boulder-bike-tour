import React from 'react'
import Counter from './counter'
import Navbar from './../navbar'

function Home() {
    // do something here
    return (
        // render here
        <div className="bg-image h-full">
        <Navbar />,
        {/* <p className="text-white">hola</p> */}
        <Counter />
        
        </div>
    )
}

export default Home;