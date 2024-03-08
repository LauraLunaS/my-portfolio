'use-client';
import React from "react";
import Image from "next/image"
import { Card, Title } from './style';

interface CardProps {
    src: string;
    title: string;
}

const CardService: React.FC<CardProps> = ({ title, src }) => {
    return (
        <Card>
            <Title>{title}</Title>
            <img src={src} alt='cardServie'></img>
        </Card>
    )
}

export default CardService;