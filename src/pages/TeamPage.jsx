import React from "react";
import Team from "../components/Team";
import "../stylesheets/team.scss";

const TeamPage = () => {
  return (
    <div className="team-page-container" style={{ minHeight: "100vh", paddingTop: "20px" }}>
      <Team />
    </div>
  );
};

export default TeamPage;
