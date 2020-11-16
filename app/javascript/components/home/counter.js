import React from 'react'

function Counter() {
    // do something here
    return (
        // render here
        <>
            {/* <Countdown 
                /> */}
            <div className="flex justify-center border-4 h-100">
                <div className="w-32 text-center pt-5 text-5xl ">05 <br /><span className="text-base">days</span></div>
                <div className="w-32 text-center pt-5">14 <br /> Hours</div>
                <div className="w-32 text-center pt-5">50 <br /> Minutes</div>
                <div className="w-32 text-center pt-5">30 <br /> Second</div>
            </div>
        </>
    )
}

export default Counter;