import React from 'react'
import Home from '././home/home'
import Photo from './photos'
import Riders from './riders'
import Location from './location'
import Contest from './contest'

import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Navbar() {
    // do something here
    return (
        <Router>
            {/*TODO: change display from flex on smaller screens */}
            <div className="bg-image h-full">
                <div className="md:flex justify-between p-6 text-white uppercase ">
                    <div className="">
                        <h1 className="font-bold roboto">Boulder Creek</h1>
                    </div>
                    <nav className="text-center openSans">
                        <Link to="/" className="sm:mr-12 block sm:inline">Home</Link>
                        <Link to="/photos" className="sm:mr-12 block sm:inline">Photos</Link>
                        <Link to="/riders" className="sm:mr-12 block sm:inline">Riders</Link>
                        <Link to="/location" className="sm:mr-12 block sm:inline">Location</Link>
                        <Link to="/contest" className="sm:mr-12 block sm:inline">Contest</Link>
                    </nav>



                </div>
                <Switch>
                    <Route path="/photos">
                        <Photo />
                    </Route>

                    <Route path="/riders">
                        <Riders />
                    </Route>

                    <Route path="/location">
                        <Location />
                    </Route>

                    <Route path="/contest">
                        <Contest />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>

        </Router>
    )
}

export default Navbar;