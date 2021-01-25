import React, { useContext } from 'react';
import { MenuContext } from '../../contexts/MenuContext';
import './style.scss';

export const MenuButton = () => {
    const [state, setState] = useContext<any>(MenuContext);
    const menuOpened = state.menuOpened;
    console.log(state, setState);
    

    const clickHandler = () => {
        setState({ menuOpened: !menuOpened });
    }
    return(
        <div onClick={() => clickHandler()} className={`menu-button__container${menuOpened ? "_active" : ""}`}>
            <div onClick={() => clickHandler()} className={`menu-button__button${menuOpened ? "_active" : ""}`} />
            <div onClick={() => clickHandler()} className={`menu-button__button${menuOpened ? "_active" : ""}`} />
        </div>
    )
}