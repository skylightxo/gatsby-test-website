import React from 'react';
import "./style.scss";

interface Props{
    type: string;
    title: string;
    content: Array<string | React.ReactNode>;
}

export const ServiceCard: React.FC<Props> = ({ type, title, content }) => {
    return (
        <>
            <div className="service-card__supercontainer">
                <p className="service-card__title"><span style={{marginRight: 13, marginLeft: 0, color: "#1C5BFF", fontWeight: 400}}>{">"}</span>{title}</p> 
                {type === "triple" ? (
                        <div className="service-card__container">
                            <div className="service-card__column">
                                <p>Basic</p>
                                <p>{content[0]}</p>
                            </div>
                            <div className="service-card__column">
                                <p style={{color: "#1C5BFF"}}>Standard</p>
                                <p>{content[1]}</p>
                            </div>
                            <div className="service-card__column">
                                <p>Premium</p>
                                <p>{content[2]}</p>
                            </div>    
                        </div>
                    ) : <div className="service-card__container">
                            <div className="service-card__column" style={{flex: 1}}>
                                <p style={{marginRight: 47}}>Standard</p>
                                <p>{content[0]}</p>
                            </div>
                            <div className="service-card__column" style={{flex: 1}}>
                                <p>Premium</p>
                                <p style={{width: 140}}>{content[1]}</p>
                            </div>
                    </div>}
                </div>
                <div className="service-card__line" />
        </>
    )
}