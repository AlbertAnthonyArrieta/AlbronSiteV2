import React, { useState } from 'react'

    

export const ServiceTile = ({icon, iconW, title, paragraph}) => {

    
    const [isHovered, setIsHovered] = useState(false);
    
    const iconClass = isHovered ? `ease-in-out duration-300 fill-primary p-2 ${iconW} scale-75` : `ease-in-out duration-300 fill-primary ${iconW}` ;

    const hoverOn = () => {
      setIsHovered(true);
    };

    const hoverOff = () => {
        setIsHovered(false);
      };

    return (
        <div className="text-left h-80 py-16 px-16 bg-ultrablack border-black border-2 flex-1" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <div>
                <div className={iconClass}>{icon}</div>
            </div>
            {!isHovered ? (
            <h3 className='text-white text-4xl font-semibold transition-opacity duration-500 opacity-100'>{title}</h3>
            ) : ( 
            <p className='text-white transition-opacity duration-500 opacity-100'>{paragraph}</p>
            )}
        </div>
    )
}

export default ServiceTile