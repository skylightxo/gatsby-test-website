import React, { useState } from 'react';

const MenuContext = React.createContext<any>([{}, () => {}]);

const MenuProvider = (props) => {
  const [state, setState] = useState({menuOpened: false});
  return (
    <MenuContext.Provider value={[state, setState]}>
      {props.children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };