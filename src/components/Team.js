import React from "react";
import "../stylesheets/team.scss";

const Team = () => {
  // Array containing information for each team member
  const teamMembers = [
    {
      name: "Dr. Sukanta Roy",
      position:
        "Faculty In-charge (FIC), Training and Placement Office  Chairman <br/>, Training and Placement Committee",
      phone: "+91-9035385841",
      email: "sukanta.me@nitmz.ac.in / tnp@nitmz.ac.in",
      linkedin: "https://www.linkedin.com/in/dr-sukanta-roy-75a9b13b",
      image_name: "dr_sukanta_roy.png",
    },
    {
      name: "Dr. Ashish Singh Patel",
      position: "FIC, Alumni",
      phone: "+91-8839341501",
      email: "ashish.cse@nitmz.ac.in",
      image_name: "dr_ashish_singh.png",
    },
    {
      name: "Dr. Amit Yadav",
      position: "TPO, CE",
      phone: "+91-9755007773",
      linkedin: "",
      email: "amit.ce@nitmz.ac.in",
      image_name: "dr_amit.png",
    },
    {
      name: "Dr. Lalhruaizela",
      position: "TPO, CSE",
      phone: "+91-9487678402",
      linkedin: "",
      email: "lalhruaizela.cse@nitmz.ac.in",
      image_name: "dr_zela.png",
    },
    {
      name: "Dr. K. Vanlalawmpuia",
      position: "TPO, ECE",
      phone: "+91-9774912755",
      linkedin: "",
      email: "kpuitea.ece@nitmz.ac.in",
      image_name: "dr_puia1.png",
    },
    {
      name: "Dr. Ramesh Kumar",
      position: "TPO, EEE",
      phone: "+91-8822097049",
      linkedin: "ttps://www.linkedin.com/in/dr-ramesh-kumar-40590646",
      email: "ramesh.ee@nitmz.ac.in",
      image_name: "dr_ramesh.png",
    },
    {
      name: "Dr. Vijay Mandal",
      position: "TPO, ME",
      phone: "+91-9661164031",
      email: "vijay.me@nitmz.ac.in",
      image_name: "dr_vijay2.png",
    },
  ];

  const graduateExecutives = [
    {
      name: "Avishek Gope",
      position: "Graduate Executive",
      branch: "CSE",
      phone: "+91-9264270247",
      linkedin: "",
      image_name: "avishek_gope.png",
    },
    {
      name: "Ayush Raj",
      position: "Graduate Executive",
      branch: "ECE",
      phone: "+91-7254905694",
      linkedin: "",
      image_name: "ayush_raj.png",
    },
  ];

  const studentPlacementcordinators = [
    {
      name: "Vikash Kumar",
      position: "Placement Coordinator",
      branch: "ME",
      linkedin: "",
      image_name: "vikash_kumar.png",
      designation: "Team Lead",
    },
    {
      name: "Sanjeevni Joshi",
      position: "Placement Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/sanjeevni-joshi-927737221",
      image_name: "sanjeevani_joshi1.png",
    },
    {
      name: "Siddharth Bhatt",
      position: "Placement Coordinator",
      branch: "CSE",
      linkedin: "",
      image_name: "siddharth_bhatt1.png",
    },

    {
      name: "Shubham Kumar",
      position: "Placement Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/shubham-kumar-477826271",
      image_name: "shubham_kumar1.png",
    },

    {
      name: "Pratima Prit",
      position: "Placement-Coordinator",
      branch: "EEE",
      linkedin: "https://www.linkedin.com/in/pratima-prit-979b3a1b1/ ",
      image_name: "pratimaprit.png",
    },
    {
      name: "Shashank Shekhar",
      position: "Placement-Coordinator",
      branch: "MT CIR",
      linkedin: "https://www.linkedin.com/in/shashanknitmz",
      image_name: "Shashank_shekhar1.jpg",
    },
  ];

  const studentActivityCoordinators2025 = [
    {
      name: "Khushbu Kumari",
      position: " Activity Coordinator",
      branch: "CSE",
      designation: "Team-Lead",
      linkedin: "https://www.linkedin.com/in/khushbu-kumari-772543251",
      image_name: "khushbu_kumari1.png",
    },
    {
      name: "Yazat Mishra",
      position: "Activity Cordinator",
      branch: "ECE",
      linkedin: "",
      image_name: "yazatmishra.png",
    },
    {
      name: "Prashant Kumar",
      position: "Activity Coordinator",
      branch: "EEE",
      linkedin: "https://www.linkedin.com/in/prashant-kumar-183960248",
      image_name: "prashant_kumar.png",
    },
    {
      name: "Vishal Singh",
      position: "Activity Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/vishal-singh-1ab403252",
      image_name: "vishal_singh.png",
    },
    {
      name: "Rahul Kumar Prajapati ",
      position: "Activity Coordinator",
      branch: "CE",
      linkedin: "",
      image_name: "dummy.png",
    },
    {
      name: "Kishor Malakar",
      position: "Activity Coordinator",
      branch: "MT CIR",
      linkedin: "",
      image_name: "dummy.png",
    },
  ];

  const studentActivityCoordinators2026 = [
    {
      name: "Suman Kumar Verma",
      position: "Activity Cordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/shashwatest ",
      image_name: "Suman_kumar_Verma.png",
    },
    {
      name: "Abhinav Gupta",
      linkedin: "https://www.linkedin.com/in/abhinav-gupta-850276260",
      position: "Activity Cordinator",
      branch: "ME",
      image_name: "abhinav1new.png",
    },

    {
      name: "Md.Sibtain",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "",
      image_name: "md_sibtain1.png",
    },
    {
      name: "Rahul Kumar",
      position: "Activity Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-8a9a7825b ",
      image_name: "rahul_kumar1.png",
    },
    {
      name: "Rohit Kumar Gupta ",
      position: "Activity Coordinator",
      branch: "EEE",
      linkedin: "https://www.linkedin.com/in/rohit-kumar-gupta-33719624b",
      image_name: "Rohit_kumar.jpg",
    },
  ];

  const executiveMembers = [
    {
      name: "Shashank Kumar Singh",
      position: "Executive Members",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/shashank-kumar-singh-655432230 ",
      image_name: "shashank_kumar1.jpg",
    },
    {
      name: "Jyoti",
      position: "Executive Members",
      branch: "CS",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-8a9a7825b ",
      image_name: "dummy.png",
    },
    {
      name: "Prachi Gupta",
      position: "Executive Members",
      branch: "EC",
      linkedin: "https://www.linkedin.com/in/prachi-gupta-a82918232 ",
      image_name: "prachi.png",
    },
    {
      name: "Chandni Kumari",
      position: "Executive Members",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/chandni-kumari-a9b969250  ",
      image_name: "chandni_kumari1.png",
    },
    {
      name: "Kanahiya Kumar",
      position: "Executive Members",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/kanhaiya-kumar-586542248 ",
      image_name: "kanahiya_kumar1.jpg",
    },
  ];

  const associateMembers = [
    {
      name: "Khushi Singh",
      position: "Associate Members",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/khushi-singh-a298ab1b1",
      image_name: "khushi_singh.png",
    },
    {
      name: "Tanmay_kumar",
      position: "Associate Members",
      branch: "CS",
      linkedin: "https://www.linkedin.com/in/tanmay-kumar-4360a9256 ",
      image_name: "tanmay_kumar1.png",
    },
    {
      name: "Ashwini",
      position: "Associate Members",
      branch: "EC",
      linkedin: "",
      image_name: "dummy.png",
    },
    {
      name: "Mudavath Pooja",
      position: "Associate Members",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/mudavath-pooja-0591482b9  ",
      image_name: "pooja1.png",
    },
    {
      name: "Soundarya M.",
      position: "Associate Members",
      branch: "EE",
      linkedin: " ",
      image_name: "dummy.png",
    },
  ];

  const mediaMembers = [
    {
      name: "Dharmendra Chaudhry",
      position: "Media Team Lead",
      branch: "ECE",
      linkedin: " ",
      image_name: "Dharmendra.jpg",
    },
    {
      name: "Ayush Anand",
      position: "Media Members",
      branch: "CSE",
      linkedin: "",
      image_name: "dummy.png",
    },
    {
      name: "Sourabh Kumar ",
      position: "Media Members",
      branch: "CE",
      linkedin: " ",
      image_name: "dummy.png",
    },
    {
      name: "Anand Rao Bauddh",
      position: "Media Members",
      branch: "ME",
      linkedin: "",
      image_name: "dummy.png",
    },
    {
      name: "Priyanshu Ranjan",
      position: "Media Members",
      branch: "EE",
      linkedin: "  ",
      image_name: "dummy.png",
    },
  ];

  return (
    <div className="team-container" id="team">
      <h2 className="team-container-title">OUR TEAM</h2>
      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        HEAD'S
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${member.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{member.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div>{member.name}</div>
                <div
                  dangerouslySetInnerHTML={{ __html: `${member.position}` }}
                ></div>
                <div>Phone: {member.phone}</div>
                <div>Email: {member.email}</div>
              </div>
              {/* <div className="align-middle">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Graduate Executives
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {graduateExecutives.map((graduateexecutive, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${graduateexecutive.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{graduateexecutive.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{graduateexecutive.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${graduateexecutive.position}`,
                  }}
                ></div>
                <div> {graduateexecutive.branch}</div>
                <div> {graduateexecutive.designation}</div>
                <div>Phone: {graduateexecutive.phone}</div>
              </div>
              <div className="align-middle">
                <a
                  href={graduateexecutive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        STUDENT PLACEMENT COORDINATORS
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentPlacementcordinators.map((placementcoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${placementcoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{placementcoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{placementcoordinator.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${placementcoordinator.position}`,
                  }}
                ></div>
                <div> {placementcoordinator.branch}</div>
                <div> {placementcoordinator.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={placementcoordinator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Student Activity Cordinators (2025 Batch){" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentActivityCoordinators2025.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${activityCoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{activityCoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{activityCoordinator.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${activityCoordinator.position}`,
                  }}
                ></div>
                <div> {activityCoordinator.branch}</div>
                <div> {activityCoordinator.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={activityCoordinator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Student Activity Cordinators (2026 Batch){" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentActivityCoordinators2026.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${activityCoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{activityCoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{activityCoordinator.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${activityCoordinator.position}`,
                  }}
                ></div>
                <div> {activityCoordinator.branch}</div>
                <div> {activityCoordinator.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={activityCoordinator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Executive Members{" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {executiveMembers.map((excutive, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${excutive.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{excutive.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{excutive.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${excutive.position}`,
                  }}
                ></div>
                <div> {excutive.branch}</div>
                <div> {excutive.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={excutive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Associate Members{" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {/* <div> */}
        {associateMembers.map((excutive, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${excutive.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{excutive.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{excutive.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${excutive.position}`,
                  }}
                ></div>
                <div> {excutive.branch}</div>
                <div> {excutive.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={excutive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Media Team Members
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {mediaMembers.map((mediamember, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/team/${mediamember.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{mediamember.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{mediamember.name}</div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${mediamember.position}`,
                  }}
                ></div>
                <div> {mediamember.branch}</div>
                <div> {mediamember.designation}</div>
              </div>
              <div className="align-middle">
                <a
                  href={mediamember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="assets/img/team/linkedin.png"
                    alt="LinkedIn"
                    style={{ width: "20px", height: "20px", marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
