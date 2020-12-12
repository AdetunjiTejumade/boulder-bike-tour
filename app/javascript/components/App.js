import React from 'react'
import Home from '././home/home'
import Photo from './photos'
import Riders from './riders'
import Location from './location'
import Contest from './contest'
import Navbar from './navbar'
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();

    const paths = location.pathname;
    const isHome = paths === '/'

    return (
        <div className={isHome ? 'bg' : 'h-full'}>
            <div className={isHome ? 'md:flex justify-between p-6 text-white uppercase bg-none' : 'md:flex justify-between p-6 text-white uppercase bg-gray-500'}>    
               <Navbar />
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

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            {/* <Photo /> */}
        </div>
    )
}

export default App;