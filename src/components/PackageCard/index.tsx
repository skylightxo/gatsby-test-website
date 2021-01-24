import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "./style.scss";

interface Props{
    icon: React.ReactNode;
    title: string;
    price: string;
    services: Array<string>;
}

export const PackageCard: React.FC<Props> = ({ icon, title, price, services }) => {
    const designerPrice = price.split('/');
    return(
        <div className="package-card__container">
            <div className="package-card__head">
                <div className="package-card__bookmark">
                    {icon}
                </div>
                <p className="package-card__title">{title}</p>
                <p className="package-card__price">{designerPrice[0]}
                {designerPrice[1] ? <span style={{fontSize: 24}}>/{designerPrice[1]}</span> : null}
                </p>
            </div>
            <div className="package-card__services">
                {services.map((s, i) => (
                    <p key={i + s.substr(0, 2)} style={{margin: 0}}><CheckOutlined style={{color: "#FFA800", marginRight: "8.58px", width: "11.84px"}} />{s}</p>
                ))}
            </div>
            <Button style={{backgroundColor: "#1C5BFF", color: "white", width: "80%", margin: "27px", fontSize: "16px"}}>{">"} Beställ</Button>
        </div>
    )
}