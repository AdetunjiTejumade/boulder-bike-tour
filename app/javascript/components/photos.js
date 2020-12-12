import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import Footer from './footer'
import LazyLoad from 'react-lazyload'
import Loader from './loader'
import InfiniteScroll from "react-infinite-scroll-component";
import pic from '../../assets/images/01.jpg'
import pic2 from '../../assets/images/02.jpg'

function Photo() {
    const [items, setItems] = useState([])
    const [hasMore, setHasMore] = useState(true)

    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f7bce21009318f2bb6bccbeaf0845b2d&tags=%23bikerace%2C%23BoulderBikeTour&per_page=30&format=json&nojsoncallback=1'
    useEffect(() => {
        axios
            .get(url)
            .then((result) => {
                setItems(result.data.photos.photo)
            })
    }, [])
    const fetchMore = () => {
        if (items.length >= 100) {
            setHasMore(false)
            return;
        }
        axios
            .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f7bce21009318f2bb6bccbeaf0845b2d&tags=%23bikerace%2C%23BoulderBikeTour&per_page=${items.length + 30}&format=json&nojsoncallback=1`)
            .then((result) => {
                setItems(result.data.photos.photo)
            })
    }

    return (
        <>
            <div className="min-h-full relative">

                {/* photos */}
                <div className="pt-12 pb-32">
                    <h1 className="text-center text-4xl">PHOTOS</h1>
                    <div className="">
                        <InfiniteScroll
                            dataLength={items.length}
                            next={fetchMore}
                            hasMore={hasMore}
                            className="md:grid grid-cols-3 mx-12"
                            // loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: "center" }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }

                        >


                            {items.map((image, index) => {
                                const { id, secret, farm, title, server } = image
                                const download_url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'
                                return (
                                    <div className="m-4 text-center bg-gray-200" key={index} >
                                        <LazyLoad height={200} placeholder={<Loader />} debounce={500} offset={[-200, 0]}>
                                            <img
                                                alt={title}
                                                className="object-cover h-56 w-full"
                                                src={download_url}
                                            />
                                        </LazyLoad>
                                    </div>
                                )
                            })}</InfiniteScroll>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )

}

export default Photo;