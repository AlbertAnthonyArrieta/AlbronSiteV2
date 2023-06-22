import React, { useState } from 'react'

    

export const ServiceTile = ({icon, title, paragraph}) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
      setIsHovered(!isHovered);
    };

    return (
        <div className="text-left py-16 px-16 bg-ultrablack border-black border-2 flex-grow" onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className='fill-primary w-20 p-2'>{icon}</div>
            <h3 className='text-white text-4xl font-semibold'>{title}</h3>
            {isHovered && <p className='text-white'>This paragraph appears on hover.</p>}
        </div>
    )
}

export default ServiceTile