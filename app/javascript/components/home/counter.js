import React from 'react'

function Counter() {
    // do something here
    return (
        // render here
        <>
            {/* <Countdown 
                /> */}
            <ul className="border-4 h-100 bg-yellow-500 text-center">
                <li className="inline-block text-5xl p-2 uppercase">365 <br /><span className="block text-2xl">days</span></li>
                <li className="inline-block text-5xl p-2 uppercase">21 <br /><span className="block text-2xl"> Hours</span></li>
                <li className="inline-block text-5xl p-2 uppercase">28 <br /><span className="block text-2xl"> Minutes</span> </li>
                <li className="inline-block text-5xl p-2 uppercase">30 <br /><span className="block text-2xl"> Second</span> </li>
            </ul>
        </>
    )
}

export default Counter;