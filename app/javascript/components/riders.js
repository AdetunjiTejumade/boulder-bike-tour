import React from 'react';

function Riders() {
    const riders = [
        {
            "firstName": "Dustin",
            "lastName": "Green",
            "city": "Hickory Hills",
            "state": "IL"
        },
        {
            "firstName": "Jason",
            "lastName": "Finn",
            "city": "Huntington Beach",
            "state": "CA"
        },
        {
            "firstName": "Howard",
            "lastName": "Thompson",
            "city": "Hale",
            "state": "MO"
        },
        {
            "firstName": "Maggie",
            "lastName": "Lantz",
            "city": "Dublin",
            "state": "OH"
        },
        {
            "firstName": "Lawrence",
            "lastName": "Duran",
            "city": "Duran",
            "state": "FL"
        },
        {
            "firstName": "Irene",
            "lastName": "Molina",
            "city": "Tucson",
            "state": "AZ"
        },
        {
            "firstName": "Nancy",
            "lastName": "Garner",
            "city": "Baltimore",
            "state": "MD"
        },
        {
            "firstName": "Tara",
            "lastName": "Taylor",
            "city": "Minneapolis",
            "state": "MN"
        },
        {
            "firstName": "Alejandro",
            "lastName": "Smith",
            "city": "Scarborough",
            "state": "ME"
        },
        {
            "firstName": "Tricia",
            "lastName": "Renshaw",
            "city": "Mystic",
            "state": "CT"
        },
        {
            "firstName": "Travis",
            "lastName": "Cook",
            "city": "Twin Lakes",
            "state": "WI"
        },
        {
            "firstName": "Joan",
            "lastName": "Brooks",
            "city": "Norfolk",
            "state": "VA"
        },

        {
            "firstName": "Joseph",
            "lastName": "Rodgers",
            "city": "Wayne",
            "state": "NJ"
        },
        {
            "firstName": "Matthew",
            "lastName": "Gregson",
            "city": "Brashear",
            "state": "MO"
        },
        {
            "firstName": "Katie",
            "lastName": "Dunlap",
            "city": "Marion",
            "state": "VA"
        },
        {
            "firstName": "Leo",
            "lastName": "Howard",
            "city": "Dallas",
            "state": "TX"
        },
        {
            "firstName": "Maria",
            "lastName": "Baisden",
            "city": "Raleigh",
            "state": "NC"
        },
        {
            "firstName": "Sandy",
            "lastName": "Townsend",
            "city": "Newport ",
            "state": "PA"
        },
        {
            "firstName": "Melinda",
            "lastName": "Stephenson",
            "city": "Kahului",
            "state": "HI"
        },
        // {
        //     "firstName": "Jason",
        //     "lastName": "Nichols",
        //     "city": "Alexandria",
        //     "state": "VA"
        // },
    ]


    return (
        <>
            <div className=" pt-12">
                <div className="sm:grid grid-cols-3 mx-4 md:grid-cols-4">
                    {riders.map((items, index) => {
                        const { firstName, lastName, city, state } = items;
                        return (
                            <div className="shadow-xl md:w-56 p-4 m-4" key={index}>

                                <p>Name : {firstName} {lastName}</p>

                                <p>City of Origin : {city}</p>
                                <p>State of Origin : {state}</p>
                            </div>
                        )
                    })}

                </div>


            </div>
        </>
    )
}
export default Riders;
