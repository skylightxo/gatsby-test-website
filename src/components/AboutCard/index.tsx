import React from "react";
import "./style.scss"

interface Props{
    icon: React.ReactNode,
    headingText: string,
    description: React.ReactNode,
}

export const AboutCard: React.FC<Props> = ({ icon, headingText, description }) => {
    return(
        <div className="about-card__container">
            <div className="about-card__icon-container">
                {icon}
            </div>
            <p className="about-card__heading">{headingText}</p>
            <div className="about-card__description">{description}</div>
        </div>
    )
}