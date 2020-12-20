import React from 'react'
import Counter from './counter'
import Footer from '../footer'
import racer from '../../../assets/images/03.jpg'
import contest from '../../../assets/images/04.jpg'
import ride from '../../../assets/images/05.jpg'

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
            <div className="bg-white">
                <div className="pt-6 pb-12 mb-12">

                    <div className=" mt-6 md:grid grid-cols-2">
                        <div className="">
                            <img src={racer} alt="a bike racer" />
                        </div>
                        <div className="px-16">
                            <h3 className="text-4xl font-extrabold border-b-8 border-solid border-orange-600 my-3">Explore</h3>
                            <p>Feel the wind in your hair and the curves of the road as you travel along to the stories of those who have pedaled into an adventure. Inspiring tales will take you to far-flung lands as well as nearby hidden gems you could tour over a weekend.</p>
                        </div>


                    </div>

                </div>

                <div className="pt-6 pb-12 mb-12">
                    <div className=" mt-6 md:grid grid-cols-2 rev">
                    
                        <div className="md:order-last">
                            <img src={ride} alt="people riding a bike" />
                        </div>
                       <div className="px-16">
                            <h3 className="text-4xl font-extrabold border-b-8 border-solid border-orange-600 my-3">Ride</h3>
                            <p>Whether you're packing in the miles or meandering along your route, your bike trip will be something to remember. We'll be there as you travel — and when the unexpected arrives — to lend you helpful resources and plenty of encouragement.</p>
                        </div>
                    </div>
                </div>

                <div className=" pt-6 pb-12 mb-12">

                    <div className="md:grid grid-cols-2">
                        <div className="">
                            <img src={contest} alt="people competing" />
                        </div>
                        <div className="px-16">
                            <h3 className="text-4xl font-extrabold border-b-8 border-solid border-orange-600 my-3">Contest</h3>
                            <p>The boulder mountain bike tour is one of the best. This year you stand a chance to win amazing prices by slogans for this year's event.</p>
                           
                        </div>


                    </div>

                </div>
            </div>

            <Footer style={{ position: 'relative' }} />
        </>
    )
}
//
export default Home;