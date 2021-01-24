import React from 'react';
import './style.scss';

interface Props{
    type: string,
}

export const PricingCard: React.FC<Props> = ({ type }) => {
    return(
        <div className={`pricing-card__container ${type === "vertical" ? "pricing-card__container_vertical" : "pricing-card__container_horizontal"}`}>        
        {type === "vertical" ? (
            <>
                <div className="pricing-card__row">
                    <p style={{fontSize: 18, fontWeight: 700}}>Basic</p> 
                    <p style={{fontSize: 16}}><span>Kr</span><span style={{fontWeight: 700, fontSize: 18}}>948</span><span style={{fontStyle: "italic"}}>/år</span></p> 
                </div>
                <div className="pricing-card__line_vertical" />
                <div className="pricing-card__row" style={{color: "#1C5BFF"}}>
                    <p style={{fontSize: 18, fontWeight: 700}}>Standard</p> 
                    <p style={{fontSize: 16}}><span>Kr</span><span style={{fontWeight: 700, fontSize: 18}}>1716</span><span style={{fontStyle: "italic"}}>/år</span></p> 
                </div>
                <div className="pricing-card__line_vertical" />
                <div className="pricing-card__row">
                    <p style={{fontSize: 18, fontWeight: 700}}>Premium</p> 
                    <p style={{fontSize: 16}}><span>Kr</span><span style={{fontWeight: 700, fontSize: 18}}>3540</span><span style={{fontStyle: "italic"}}>/år</span></p> 
                </div>
            </>
        ) : (
            <>
                <div className="pricing-card__column" style={{color: "#1C5BFF"}}>
                    <p style={{fontSize: 22, fontWeight: 700}}>Standard</p> 
                    <p style={{fontSize: 16}}><span>Kr</span><span style={{fontWeight: 700, fontSize: 22}}>199</span><span style={{fontStyle: "italic"}}>/år</span></p> 
                </div>
                <div className="pricing-card__line_horizontal" />
                <div className="pricing-card__column">
                    <p style={{fontSize: 22, fontWeight: 700}}>Premium</p> 
                    <p style={{fontSize: 16}}><span>Kr</span><span style={{fontWeight: 700, fontSize: 22}}>299</span><span style={{fontStyle: "italic"}}>/år</span></p> 
                </div>
            </>
        )}
        </div>
    )
}