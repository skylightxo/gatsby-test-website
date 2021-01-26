import { Link } from "gatsby"
import React, { useContext } from "react";
import { MenuContext } from '../../contexts/MenuContext';
import { MenuButton } from "../MenuButton";

interface Props{
  siteTitle?: string;
}

export const Header: React.FC<Props> = ({ siteTitle = 'sveahemsidor.' }) => {
  const [state] = useContext(MenuContext);
  const menuOpened = state.menuOpened;
  const isDesktop = window.screen.width > 920;
  
  return(
    <header style={{display: "flex", alignItems: "center", paddingLeft: 31, paddingTop: 22, background: `${menuOpened ? '#1C5BFF' : 'white'}`}}>
      <MenuButton />
      <h1 style={{ margin: 0, 
            marginLeft: `${isDesktop ? "45%" : 10}` }}>
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
  )
}