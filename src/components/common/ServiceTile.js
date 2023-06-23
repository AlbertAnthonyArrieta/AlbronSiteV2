import React, { useState } from 'react'

    

export const ServiceTile = ({icon, title, paragraph}) => {

    const [isHovered, setIsHovered] = useState(false);

    const hoverOn = () => {
      setIsHovered(true);
    };

    const hoverOff = () => {
        setIsHovered(false);
      };

    return (
        <div className="text-left h-80 py-16 px-16 bg-ultrablack border-black border-2 flex-1" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <div>
                <div className='fill-primary p-2'>{icon}</div>
            </div>
            {!isHovered ?  
            <h3 className='text-white text-4xl font-semibold'>{title}</h3>
            : 
            <p className='text-white'>{paragraph}</p>}
        </div>
    )
}

export default ServiceTile