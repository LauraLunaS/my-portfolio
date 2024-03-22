'use client';
import { Box } from './style';

interface IconProps {
    IconSvg: string;
}

const IconProfile: React.FC<IconProps> = ( { IconSvg } ) => {
    return (
        <Box>
            <img src={IconSvg}></img>
        </Box>
    )
}
export default IconProfile;