import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { riders } from './riderInfo'
import Footer from './footer'

function Location() {
    const token = 'pk.eyJ1IjoidGVqdW1hZGUiLCJhIjoiY2tpY256OTR0MWI2ZTJ5bzVydHk0aDJmcCJ9._zaIJ1d9pVt2WX9YDOR5iw'
    const position = [40.0150, -105.2705]

    return (

        <>
            <MapContainer center={position} zoom={13} className="h-full mx-6">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {
                    riders.map((items, index) => {
                        const { firstName, lastName, coordinates } = items;
                        const [lat, lon] = coordinates;
                        return (
                            <Marker position={{ lat, lon }} key={index}>
                                <Popup>
                                    {firstName} {lastName}
                                </Popup>
                            </Marker>
                        )
                    })
                }

            </MapContainer>

            <Footer style={{position: 'relative', marginTop: '3rem'}} />
        </>

    )

}
export default Location;
