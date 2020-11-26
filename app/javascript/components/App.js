import React from 'react'
import Navbar from './navbar'
import Home from '././home/home'
import Photo from './photos'
import Riders from './riders'
import Location from './location'
import Contest from './contest'
import '../../assets/stylesheets/main.css'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    /* const [text, setText] = React.useState('Hello')
 
     const changeText = event => {
         setText(event.target.value)
     } */
    return (
        /* <div>
             <input type='text' value={text} onChange={changeText}/>
             {text}
         </div> */
        <div className="h-full bg-image">
            <Navbar />
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
            
            {/* <Photo /> */}
        </div>
    )
}

export default App;