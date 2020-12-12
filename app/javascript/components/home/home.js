import React from 'react'
import Counter from './counter'
import Footer from '../footer'
import racer from '../../../assets/images/03.jpg'

function Home() {
    // do something here
    return (
        // render here
        <>
            <div className="pt-16 pb-12 h-screen">
                {/* Change font!!!  */}
                <div className="text-center text-white">
                    <h2 className="text-5xl capitalize">Boulder Mountain</h2>
                    <h3 className="text-3xl">Starts in</h3>

                    {/* The best Biking challenge of the year */}
                </div>

                <Counter />
            </div>
            <div className="bg-white pt-6 pb-12 mb-12">
                <h3 className="text-center text-4xl">Boulder bike tour</h3>
                <div className="px-16 mt-6 grid grid-cols-2">
                    <div className="">
                        <p>The boutain bike tour is one of the best</p>
                        <p>lorem ipsum dot amet lo por dat set la met</p>
                    </div>
                    <div className="">
                        <img src={racer} alt="a bike racer"/>
                    </div>

                </div>

            </div>
            <Footer style={{position: 'relative'}}/>
        </>
    )
}
//
export default Home;