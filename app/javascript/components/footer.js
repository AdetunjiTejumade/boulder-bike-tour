import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'

function Footer({style}) {
    //do something
        return (
        <div className="text-center bg-orange-500 text-white absolute bottom-0 w-full align-middle h-20 pt-6"  style={style}>
            <div className="grid grid-cols-2">
                 <div>
                <p>1000 NY BRICK LANE</p>
                <p>+230474764763</p>
                <p></p>
            </div>

            <div>
                <p className="uppercase">Get in touch</p>
                <FontAwesomeIcon icon={['fab', 'facebook']} className="mr-4"/>
                <FontAwesomeIcon icon={['fab', 'twitter']}  className="mr-4"/>
                <FontAwesomeIcon icon={['fab', 'instagram']}  className="mr-4"/>
            </div>
            </div>
           
        </div>
    )
}

export default Footer;