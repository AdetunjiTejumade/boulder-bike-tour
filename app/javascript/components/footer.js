import React from 'react';


function Footer({style}) {
    //do something
        return (
        <div className="text-center bg-orange-500 text-white absolute bottom-0 w-full align-middle h-20"  style={style}>
            <div className="grid grid-cols-2">
                 <div>
                <p>1000 NY BRICK LANE</p>
                <p>+230474764763</p>
                <p></p>
            </div>

            <div>
                <p>Get in touch</p>
                <i>f</i>
                <i>g</i>
                <i>t</i>
            </div>
            </div>
           
        </div>
    )
}

export default Footer;