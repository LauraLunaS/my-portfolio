'use client';
import React from "react";
import {
    Card, 
    ContainerTopic, 
    Topic,
    Circle,
    Date,
    Description
} from './style';

interface CardEduProps {
    date: string;
    description: string;
    imageSrc?: string;
}


const CardUpper: React.FC<CardEduProps> = ( {date, description, imageSrc} ) => {
    return (
        <Card>
            {imageSrc && <img src={imageSrc} alt="Education" />} 
            <ContainerTopic>
                <Topic>
                    <Circle />
                </Topic>
                <Date>{date}</Date>
            </ContainerTopic>
            <Description>{description}</Description>
        </Card>
    )
}

export default CardUpper;