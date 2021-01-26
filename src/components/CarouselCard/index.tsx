import React from 'react';
import Image from '../image';
import { Button } from 'antd';
import './style.scss';

interface Props{
    imageSrc: string,
    imageAlt: string,
    text: React.ReactNode
    buttonText: string
    imageLoading?: string
}

export const CarouselCard: React.FC<Props> = ({ imageSrc, imageAlt, text, buttonText, imageLoading }) => {
    return(
        <div className="carousel-card__container">
            <Image 
            className="carousel-card__image"
            src={imageSrc}
            alt={imageAlt}
            loading={imageLoading}
            />
            <div style={{marginBottom: 64}}>
                <Image src="line.svg" alt=""/>
                {text}
                <Button className="carousel-card__button" type="primary" style={{backgroundColor: "#1C5BFF"}}><p style={{display: "flex", justifyContent: "space-between", fontFamily: "Raleway"}}><span style={{marginRight: 10}}>{">"}</span><span>{buttonText}</span></p></Button>
            </div>
        </div>
    )
}