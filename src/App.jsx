import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/MainComponent/Navbar.js";
import HomePage from "./pages/HomePage.js";
import UserContextProvider from "./context/UserContextProvider.jsx";
import Hero from "./components/Hero.js";
import FooterSection from "./components/FooterSection.js";
import EventsList from "./pages/Events.js";
import EventPage from "./pages/Event_Page.js";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
           <Route path="/" element={<HomePage />} /> 
           <Route path="/events" element={<EventsList />} /> 
           <Route path="/events/:id" component={EventPage} />
        </Routes>

        <FooterSection />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
