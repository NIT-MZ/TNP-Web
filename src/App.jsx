import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/MainComponent/Navbar.js";
import HomePage from "./pages/HomePage.js";
import UserContextProvider from "./context/UserContextProvider.jsx";
// import Hero from "./components/Hero.js";
import FooterSection from "./components/FooterSection.js";
import EventsList from "./pages/Events.js";
import Internships from "./pages/Internships.js";
import ForRecruiters from "./pages/ForRecruiters.js";
import Jaf from "./components/JAF.js";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
           <Route path="/" element={<HomePage />} /> 
           <Route path="/events" element={<EventsList />} /> 
           <Route path="/internship" element={<Internships />} /> 
           <Route path="/recruiters" element={<ForRecruiters />} /> 
           <Route path="/jaf" element={<Jaf />} /> 
        </Routes>

        <FooterSection />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
