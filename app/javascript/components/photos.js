import React from 'react'
import Navbar from './navbar'
import pic from '../../assets/images/01.jpg'
import pic2 from '../../assets/images/02.jpg'

function Photo() {
    //logic here
    return (
        //render stuff
        <>
            <h1 className="text-center text-4xl">PHOTOS</h1>

            {/* photos */}
            <div className="pt-12">
                <div className="md:grid grid-cols-3 mx-12">

                    <div className="m-4">
                        <img src={pic} className="object-cover h-48 w-full"/>
                    </div>

                    <div className="m-3">
                        <img src={pic2} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic2} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic} className="object-cover h-48 w-full" />
                    </div>

                    <div className="m-3">
                        <img src={pic} className="object-cover h-48 w-full" />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Photo;