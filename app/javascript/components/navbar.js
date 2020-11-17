import React from 'react'

function Navbar() {
    // do something here
    return (
        // render here
        <>
        {/*TODO: change display from flex on smaller screens */}
        <div className="flex justify-between p-6">
            <div className="text-black">
                <h1 className="font-bold">Rider</h1>
            </div>
            <nav className="">
                <a href="" className="mr-12">Home</a>
                <a href="" className="mr-12">Photos</a>
                <a href="" className="mr-12">Riders</a>
                <a href="" className="mr-12">Location</a>
                <a href="" className="mr-12">Contest</a>
            </nav>
        </div>
            
        
        </>
    )
}

export default Navbar;