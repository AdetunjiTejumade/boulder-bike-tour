import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import Home from '././home/home'
import Photo from './photos'
import Riders from './riders'
import Location from './location'
import Contest from './contest'

import image from '../../assets/images/02.jpg'
import { Link, BrowserRouter as Router, Switch, Route, useLocation  } from 'react-router-dom';

function App() {
    /* const [text, setText] = React.useState('Hello')
 
     const changeText = event => {
         setText(event.target.value)
     } */
    // const [bg, setBg ] = useState("linear-gradient(rgb(0 0 0 / 38%), rgb(0 0 0 / 18%)), image-url('../../assets/images/02.jpg')")
    //  

    const location = useLocation();
   
    const paths = location.pathname;
    const isHome = paths === '/'

    return (
        /* <div>
             <input type='text' value={text} onChange={changeText}/>
             {text}
         </div> */
        <div className={ isHome ? 'bg' : 'h-full' }>
            <div className={ isHome ? 'md:flex justify-between p-6 text-white uppercase bg-none' : 'md:flex justify-between p-6 text-white uppercase bg-gray-500' }>
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

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

            {/* <Photo /> */}
        </div>
    )
}

export default App;