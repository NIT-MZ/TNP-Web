import React,{useState,useEffect} from "react";
import UserContext from "./UserContext.jsx";

const UserContextProvider = ({ children }) => {
const [userDetail, setUserDetail] = useState(
  JSON.parse(localStorage.getItem("details")) || null
);
const getUserDetail = async (details) => {
  if (details) {
    setUserDetail(details);
  } else {
    console.error("Invalid details passed to getUserDetail");
  }
};

// Save user details to localStorage whenever there's a change in userDetail state.
useEffect(() => {
  localStorage.setItem("details", JSON.stringify(userDetail));
}, [userDetail]);



  return (
    <UserContext.Provider value={{ 
      setUserDetail,
      getUserDetail,
      userDetail
     }}>
      {children}
    </UserContext.Provider>
  );
};




export default UserContextProvider;
