import React from 'react';
import icons from '../../assets/images/sprite.svg'

type IconProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?:string
}
export const Icon: React.FC<IconProps> = ({iconId, width, height,viewBox}) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${icons}#${iconId}`}></use>
        </svg>
    );
};

