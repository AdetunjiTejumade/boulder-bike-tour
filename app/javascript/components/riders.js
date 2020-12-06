import React from 'react';
import {riders} from './riderInfo'
function Riders() {
    

    return (
        <>
            <div className=" pt-12">
                <div className="sm:grid grid-cols-3 mx-4 lg:grid-cols-4">
                    {riders.map((items, index) => {
                        const { firstName, lastName, city, state } = items;
                        return (
                            <div className="shadow-xl md:w-56 p-4 m-4" key={index}>

                                <p>Name : {firstName} {lastName}</p>

                                <p>City of Origin : {city}</p>
                                <p>State of Origin : {state}</p>
                            </div>
                        )
                    })}

                </div>


            </div>
        </>
    )
}
export default Riders;
