import React from 'react'
import Navbar from './navbar'
import Home from '././home/counter'
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
        <>
            <Navbar />
            <h1>Hello World</h1>
            <Home />
            
        </>
    )
}

export default App;