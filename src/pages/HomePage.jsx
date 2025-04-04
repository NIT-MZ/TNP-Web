import React from "react";
import Team from "../components/Team";
import Hero from "../components/Hero";
import NewsandEvents from "../components/NewsandEvents";
import About from "../components/About";
import DirectorsMessage from "../components/DirectorsMessage";
import Counts from "../components/Counts";
import WebTeam from "../components/WebTeamMember";
import TrainingandRecruitingPartners from "../components/TrainingandRecruitingPartners";
import TestimonialSection from "../components/Testimonial2Section";
import CTAsection from "../components/CTAsection";
import Contact from "../components/Contact";
import Map from "../components/map";
import '../stylesheets/home.scss';


const HomePage = () => {
  return (
    <div className="home-page-container">
      <Hero />
      <div className="home-page-top-section">
        <DirectorsMessage />
        <NewsandEvents />
      </div>
      <About />
      <Counts />
      <Team />
      <TrainingandRecruitingPartners />
      <TestimonialSection />
      <WebTeam />
      <CTAsection />
      <Contact />
      <Map />
    </div>
  );
};

export default HomePage;
