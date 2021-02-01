import { Link } from "gatsby"
import React, { useContext } from "react";
import { MenuContext } from '../../contexts/MenuContext';
import { MenuButton } from "../MenuButton";
import './style.scss';

interface Props{
  siteTitle?: string;
}

export const Header: React.FC<Props> = ({ siteTitle = 'sveahemsidor.' }) => {
  const [state] = useContext(MenuContext);
  const menuOpened = state.menuOpened;
  
  return(
    <>
      <header className="header_mobile" style={{background: `${menuOpened ? '#1C5BFF' : 'white'}`}}>
        <MenuButton />
        <h1>
          <Link
            to="/"
            style={{
              display: "flex",
              color: `${menuOpened ? '#FFA800' : 'black'}`,
              fontFamily: `Josefin Sans`,
              textDecoration: `none`,
              fontWeight: 500,
              fontSize: 18,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </header>
      <header className="header_desktop" style={{background: 'white'}}>
        <div>
          <h1>
            <Link
              to="/"
              style={{
                display: "flex",
                color: "black",
                fontFamily: `Josefin Sans`,
                textDecoration: `none`,
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div style={{display: "flex"}}>
          <p>
            <Link className="header__link_desktop" style={{fontSize: 18, color: "black", cursor: "pointer"}} to="#about">Skapa hemsida</Link>
          </p>
          <p>
            <Link className="header__link_desktop" style={{fontSize: 18, color: "black", cursor: "pointer", marginLeft: 20, marginRight: 20}} to="#webhosting">Webbhotell</Link>
          </p>
          <p>
            <Link className="header__link_desktop" style={{fontSize: 18, color: "black", cursor: "pointer", marginRight: 20}} to="#wordpress">Wordpress</Link>
          </p>
          <p>
            <Link className="header__link_desktop" style={{fontSize: 18, color: "black", cursor: "pointer"}} to="#faq">FAQ</Link>
          </p>
        </div>
      </header>
    </>
  )
}