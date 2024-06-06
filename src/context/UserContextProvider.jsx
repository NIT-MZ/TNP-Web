import React, { children,useState,useContext ,useEffect} from "react";

import UserContext from "./UserContext.js";

const UserContextProvider=({children})=>{

  
  

return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
  }


export default UserContextProvider;