import React from "react";
import { Carousel } from 'antd';
import { CarouselCard } from '../CarouselCard';
import { rem } from "../../utils"

export const CarouselComponent = () => {
return(
    <Carousel autoplay autoplaySpeed={7000}>
        <CarouselCard imageSrc="First-carousel-bg.png" imageAlt="sveahemsidor" buttonText="Skapa Hemsida" 
                text={<p style={{lineHeight: "39.4px"}}>
                    <span style={{fontFamily: "Raleway", fontSize: `${rem(34)}`, fontWeight: 700, color: "#1C5BFF" }}>Sveahemsidor</span> <br />
                    <span style={{fontFamily: "Raleway", fontSize: `${rem(34)}`}}>webbhotell <br /> och optimering</span>
                </p>} />
        <CarouselCard imageSrc="Second-carousel-bg.png" imageAlt="webbhotell" buttonText="Läs Mer Webbhotell" 
                text={<p>
                    <span style={{fontFamily: "Raleway", fontSize: `${rem(20)}`, fontWeight: 700, color: "#1C5BFF" }}>Webbhotell</span> <br />
                    <span style={{fontFamily: "Raleway", fontSize: `${rem(16)}`}}>Komplett hosting leverantör med 20 år i branschen och en bred tjänsteportfölj. Klassisk delad webbhotell, VPS hosting och dedikerade servrar samt våra WordPress optimerade webbhotell Alla tillgängliga på begäran.</span>
                </p>} />
        <CarouselCard imageSrc="Third-carousel-bg.png" imageAlt="konsulttjänster web" buttonText="Läs Mer" 
                text={<p>
                    <span style={{fontFamily: "Raleway", fontSize: `${rem(20)}`, fontWeight: 700, color: "#1C5BFF" }}>Konsulttjänster web</span> <br />
                    <span style={{fontFamily: "Raleway", fontSize: `${rem(16)}`}}>Med specialistkompetens inom webboptimering hjälper vi företag med analys och optimering av webbplatser ända ner på servernivå.</span>
                </p>} />
    </Carousel>
    )
}