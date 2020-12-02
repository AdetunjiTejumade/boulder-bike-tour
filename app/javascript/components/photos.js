import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import Footer from './footer'
import pic from '../../assets/images/01.jpg'
import pic2 from '../../assets/images/02.jpg'

function Photo() {
    const [items, setItems] = useState([])
    const [selectedImage, setSelectedImage] = useState('')

    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=f7bce21009318f2bb6bccbeaf0845b2d&tags=%23bikerace%2C%23BoulderBikeTour&per_page=10&format=json&nojsoncallback=1'
    useEffect(() => {
        axios
            .get(url)
            .then((result) => {
                setItems(result.data.photos.photo)
            })
    }, [])
    console.log(items);
    return (
        <>
            <h1 className="text-center text-4xl">PHOTOS</h1>

            {/* photos */}
            <div className="pt-12">
                <div className="md:grid grid-cols-3 mx-12">
                    {items.map((image, index) => {
                        const { id, secret, farm, title, server } = image
                        // console.log(id);
                        const download_url = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '.jpg'
                        return (
                            <div className="m-4" key={index} >
                                    <img
                                        alt={title}
                                        className="object-cover h-56 w-full"
                                        src={download_url}
                                    />
                                </div>
                            
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )

}

export default Photo;