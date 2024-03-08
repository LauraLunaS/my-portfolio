import { Circle } from './style';
import React from 'react';

interface IconProps {
    imageSrc: string;
}

const IconTech: React.FC<IconProps> = ( { imageSrc } ) => {
    return (
        <>
            <Circle>
                <img src={imageSrc}></img>
            </Circle>
        </>
    )
}

export default IconTech;