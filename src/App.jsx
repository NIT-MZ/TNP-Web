import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/MainComponent/Navbar.js";
import HomePage from "./pages/HomePage.js";
import UserContextProvider from "./context/UserContextProvider.jsx";
// import Hero from "./components/Hero.js";
import FooterSection from "./components/FooterSection.js";
import EventsList from "./pages/Events.jsx";
import Internships from "./pages/Internships.js";
import ForRecruiters from "./pages/ForRecruiters.js";
import Jaf from "./components/JAF.js";
import ScrollToTop from "./components/MainComponent/ScrollToTop.js";
import NewsIconPage from "./pages/NewsIconPage.js";
import NewsDetailPage from "./pages/NewsDetailPage.js";
import News from "./pages/News.js";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/internship" element={<Internships />} />
          <Route path="/recruiters" element={<ForRecruiters />} />
          <Route path="/jaf" element={<Jaf />} />

          <Route path="/NewsArcheive" element={<News />}>
            <Route index element={<NewsIconPage />} />
            <Route path=":id" element={<NewsDetailPage />} />
          </Route>
        </Routes>

        <FooterSection />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
