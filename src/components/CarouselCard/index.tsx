import React from 'react';
import Image from '../image';
import { Button } from 'antd';
import { rem } from '../../utils'

interface Props{
    imageSrc: string,
    imageAlt: string,
    text: React.ReactNode
    buttonText: string
}

export const CarouselCard: React.FC<Props> = ({ imageSrc, imageAlt, text, buttonText }) => {
    return(
        <div>
            <Image 
            src={imageSrc}
            alt={imageAlt}
            />
            <div style={{marginBottom: 64}}>
                <Image src="line.svg" alt="line"/>
                {text}
                <Button type="primary" style={{backgroundColor: "#1C5BFF"}}><p style={{display: "flex", justifyContent: "space-between", fontFamily: "Raleway"}}><span style={{marginRight: 10}}>{">"}</span><span>{buttonText}</span></p></Button>
            </div>
        </div>
    )
}