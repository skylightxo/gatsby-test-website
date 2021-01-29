import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import './style.scss';
import {MenuContext} from '../../contexts/MenuContext';
import Image from '../image';

interface Props{
    state: any;
}

export const MobileMenu: React.FC<Props> = ({  }) => {
    const [state, setState]: any = useContext(MenuContext);
    const menuOpened = state.menuOpened;

    useEffect(() => {
        menuOpened ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"; 
    }, [menuOpened])

    return(
        <div className={`mobile-menu__container${menuOpened ? "_active" : ""}`}>
            <nav>
                <ul className="mobile-menu__list">
                    <li onClick={() => setState({menuOpened: false})} className="mobile-menu__link">
                        <Link to="#carousel">Huvud</Link>
                    </li>
                    <li onClick={() => setState({menuOpened: false})} className="mobile-menu__link">
                        <Link to="#about">Skapa hemsida</Link>
                    </li>
                    <Image src="line.svg" alt="" />
                    <li onClick={() => setState({menuOpened: false})} className="mobile-menu__link">
                        <Link to="#webhosting">Webbhotell Standart</Link>
                    </li>
                    <Image src="line.svg" alt="" />
                    <li onClick={() => setState({menuOpened: false})} className="mobile-menu__link">
                        <Link to="#wordpress">Wordpress Webbhotell</Link>
                    </li>
                </ul>
            </nav>
            <div className="mobile-menu__support-block">
                <p>Support?</p>
                <p>Ring oss</p>
                <a href="tel:+4655016000">+46 550 16000</a>
            </div>
        </div>
    )
}