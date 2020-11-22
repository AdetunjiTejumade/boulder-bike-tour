import React from 'react'
import Navbar from './navbar'
import Home from '././home/home'
import Photo from './photos'
import '../../assets/stylesheets/main.css'

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
        <div className="h-full">
            <Home />
            {/* <Photo /> */}
        </div>
    )
}

export default App;