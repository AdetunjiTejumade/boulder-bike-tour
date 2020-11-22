import React from 'react'

function Counter() {
    // do something here
    return (
        // render here
        <>
            {/* <Countdown 
                /> */}
            <ul className="h-100 text-center text-white mt-32 uppercase">
                <li className="inline-block text-6xl p-2  px-4 border-r-2">03 <br /><span className="block text-2xl">months</span></li>
                <li className="inline-block text-6xl p-2 px-4 border-r-2">365 <br /><span className="block text-2xl">days</span></li>
                <li className="inline-block text-6xl p-2 px-4 border-r-2">365 <br /><span className="block text-2xl">days</span></li>
                <li className="inline-block text-6xl p-2 px-4 border-r-2">21 <br /><span className="block text-2xl"> Hours</span></li>
                <li className="inline-block text-6xl p-2 px-4 border-r-2">28 <br /><span className="block text-2xl"> Minutes</span> </li>
                <li className="inline-block text-6xl p-2 pl-4">30 <br /><span className="block text-2xl"> Second</span> </li>
            </ul>
        </>
    )
}

export default Counter;