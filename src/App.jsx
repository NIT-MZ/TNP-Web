import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/MainComponent/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
// import Hero from "./components/Hero.jsx";
import FooterSection from "./components/FooterSection.jsx";
import EventsList from "./pages/Events.jsx";
import Internships from "./pages/Internships.jsx";
import ForRecruiters from "./pages/ForRecruiters.jsx";
import Jaf from "./components/JAF.jsx";
import ScrollToTop from "./components/MainComponent/ScrollToTop.jsx";
import NewsIconPage from "./pages/NewsIconPage.jsx";
import NewsDetailPage from "./pages/NewsDetailPage.jsx";
import News from "./pages/News.jsx";
import EventForm from "./components/Admin/AddEvents.jsx";
import UserLogin from "./components/Admin/loginPage.jsx";

import AdminPage from "./components/Admin/AdminDetails.jsx";
import AddNews from "./components/Admin/AddNews.jsx";

import Logout from "./components/Admin/logout.jsx";


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
          <Route path="/addNews" element={<AddNews/>}/>

          <Route path="/login" element={<UserLogin/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/NewsArcheive" element={<News />}>
            <Route index element={<NewsIconPage />} />
            <Route path=":id" element={<NewsDetailPage />} />
          </Route>

          <Route path="/addEvent" element={<EventForm/>} />
          <Route path="/adminPage" element={<AdminPage/>}/>

        </Routes>

        <FooterSection />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
