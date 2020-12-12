import React, { useState } from 'react'
import Home from '././home/home'
import Photo from './photos'
import Riders from './riders'
import Location from './location'
import Contest from './contest'
import { Link, NavLink, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Navbar() {
    // do something here
    const [toggle, setToggle] = useState(false)
    const Toggle = () => {
        setToggle(!toggle)
        console.log(toggle);
    }

    return (
        <>

            {/* small navbar */}
            <div className="">
                <div className="flex justify-between">
                    <h1 className="font-bold roboto">Boulder Creek</h1>
                    
                    <div className="md:hidden">
                         <button className={toggle ? "hidden" : "block text-white text-xl font-semibold"} onClick={Toggle}>☰</button>
                        <button className={toggle ? "block text-white text-3xl font-semibold" : "hidden"} onClick={Toggle} >&times;</button>
                   
                    </div>
                       

                </div>


                <div className={toggle ? "block md:hidden" : "hidden"} >

                    <nav className="overlay-content font-extrabold text-3xl">
                        <Link to="/" className="md:mr-12 block md:inline">Home</Link>
                        <Link to="/photos" className="md:mr-12 block md:inline">Photos</Link>
                        <Link to="/riders" className="md:mr-12 block md:inline">Riders</Link>
                        <Link to="/location" className="md:mr-12 block md:inline">Location</Link>
                        <Link to="/contest" className="md:mr-12 block md:inline">Contest</Link>
                    </nav>
                </div>
            </div>

            {/* large navbar */}
            <nav className="text-center openSans hidden md:block">
                <Link to="/" className="md:mr-12 block md:inline">Home</Link>
                <Link to="/photos" className="md:mr-12 block md:inline">Photos</Link>
                <Link to="/riders" className="md:mr-12 block md:inline">Riders</Link>
                <Link to="/location" className="md:mr-12 block md:inline">Location</Link>
                <Link to="/contest" className="md:mr-12 block md:inline">Contest</Link>
            </nav>
        </>

    )
}
export default Navbar;