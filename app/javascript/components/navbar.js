import React from 'react'

function Navbar() {
    // do something here
    return (
        // render here
        <>
        {/*TODO: change display from flex on smaller screens */}
        <div className="md:flex justify-between p-6 text-white uppercase ">
            <div className="">
                <h1 className="font-bold roboto">Boulder Creek</h1>
            </div>
            <nav className="text-center openSans">
                <a href="" className="sm:mr-12 block sm:inline">Home</a>
                <a href="" className="sm:mr-12 block sm:inline">Photos</a>
                <a href="" className="sm:mr-12 block sm:inline">Riders</a>
                <a href="" className="sm:mr-12 block sm:inline">Location</a>
                <a href="" className="block sm:inline">Contest</a>
            </nav>
        </div>
            
        
        </>
    )
}

export default Navbar;