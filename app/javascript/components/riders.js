import React from 'react';
import { riders } from './riderInfo'
import Footer from './footer'
function Riders() {


    return (
        <>
            <div className="relative  min-h-full">
                <h1 className="text-4xl text-center roboto">Riders</h1>
                <div className="pb-32 pt-12">
                    <div className="sm:grid grid-cols-3 mx-4 lg:grid-cols-4">
                        {riders.map((items, index) => {
                            const { firstName, lastName, city, state } = items;
                            return (
                                <div className="shadow-xl md:w-56 p-10 m-4" key={index}>

                                    <p><b>Name :</b> {firstName} {lastName}</p>

                                    <p><b>City of Origin :</b> {city}</p>
                                    <p><b>State of Origin :</b> {state}</p>
                                </div>
                            )
                        })}

                    </div>


                </div>
                <Footer />
            </div>

        </>
    )
}
export default Riders;
