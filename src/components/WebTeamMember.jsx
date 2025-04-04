import React, { useState, useEffect } from "react";
import "../stylesheets/webteam.scss";

const WebTeam = () => {
  const associateMembers = [
    {
      name: "Ayush raj",
      position: "Website Team Lead",
      year: "ECE",
      image_name: "Ayush_web.jpg",
    },
    {
      name: "Sharda Kumari",
      position: "Coordinator, Web Team",
      year: "ECE",
      image_name: "Sharda_web.jpg",
    },
    {
      name: "Prachi Gupta",
      position: "Coordinator, Web Team",
      year: "ECE",
      image_name: "Prachi_web.png",
    },
    {
      name: "Dharmendra Chaudhary",
      position: "Coordinator, Web Team",
      year: "ECE",
      image_name: "Dharmendra_web.jpg",
    },
    {
      name: "Aditya Srivastav",
      position: "Coordinator, Web Team",
      year: "ECE",
      image_name: "Aditya_web.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % associateMembers.length
        );
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isSmallScreen, associateMembers.length]);

  const getVisibleMembers = () => {
    return isSmallScreen ? [associateMembers[currentIndex]] : associateMembers;
  };

  return (
    <div className="web-team-container">
      <h2 className="web-team-container-title">Development Team</h2>
      <div className="web-team-canvas">
        {getVisibleMembers().map((associate, index) => (
          <div
            className={`web-team-card-container position${index % 6}`}
            key={index}
          >
            <div
              className="web-team-card"
              style={{
                backgroundImage: `url(/assets/img/webteam/${associate.image_name})`,
              }}
            ></div>
            <div className="web-team-card-bottom">
              <div>{associate.name}</div>
              <div
                dangerouslySetInnerHTML={{ __html: `${associate.position}` }}
              ></div>
              <div>{associate.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebTeam;
