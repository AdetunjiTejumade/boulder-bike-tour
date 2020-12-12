import React, { useState, useEffect } from 'react'
import Home from '././home/home'
import Photo from './photos'
import Riders from './riders'
import Location from './location'
import Contest from './contest'
import Navbar from './navbar'

import image from '../../assets/images/02.jpg'
import { Link, BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

function App() {
    /* const [text, setText] = React.useState('Hello')
 
     const changeText = event => {
         setText(event.target.value)
     } */
    // const [bg, setBg ] = useState("linear-gradient(rgb(0 0 0 / 38%), rgb(0 0 0 / 18%)), image-url('../../assets/images/02.jpg')")  

    const location = useLocation();

    const paths = location.pathname;
    const isHome = paths === '/'

    return (
        /* <div>
             <input type='text' value={text} onChange={
                 
             }/>
             {text}
         </div> */
        <div className={isHome ? 'bg' : 'h-full'}>
            <div className={isHome ? 'md:flex justify-between p-6 text-white uppercase bg-none' : 'md:flex justify-between p-6 text-white uppercase bg-gray-500'}>
                
               <Navbar />
            </div>
            {/* navigation bar on small screens */}
           
            {/* <div className=" sm:hidden ">
                <button className="text-white text-xl font-semibold" onClick={this.Toggle}>☰</button>


                <div className={this.state.toggle ? "overlay": "none"} >
                    <button className="closebtn"  onClick={this.Toggle}>&times;</button>
                    <div className="overlay-content font-extrabold text-3xl">

                        <a href="/"><NavLink to="" >Home </NavLink></a>
                        <a href="/"><NavLink to="/about" >About</NavLink></a>
                        <a href="/"><NavLink to="/works" >Works</NavLink></a>
                        <a href="/"><NavLink to="/contact" >Contact</NavLink></a>
                    </div>
                </div>
            </div> */}
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