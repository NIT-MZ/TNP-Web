import React from "react";
import "../stylesheets/team.scss";

const Team = () => {
  // Array containing information for each team member
  const teamMembers = [
    {
      name: "Dr. Sukanta Roy",
      position:
        "Dean (Academic),Faculty In-charge Training and Placement Office Chairman,Training and Placement Committee",
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
      name: "Ayush Raj",
      position: "Graduate Executive",
      branch: "ECE",
      phone: "+91-7254905694",
      linkedin: "https://www.linkedin.com/in/ayush-raj-78b095189",
      image_name: "ayush_raj.png",
    },
  ];

  const studentPlacementcordinators2026 = [
    {
      name: "Tata Sai Vivek Vardhan",
      position: "Placement Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/sai-vivek-tata-049210280",
      image_name: "sai_vivek.jpg",
      designation: "Team Lead",
    },
    {
      name: "Nalam Deepika",
      position: "Placement Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/deepika-nalam-37a260365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Nalam_Deepika.jpg",
    },
    {
      name: "Satvik Sharma",
      position: "Placement Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/satviksharmaa/",
      image_name: "Satvik_Sharma.jpg",
    },

    {
      name: "Paras Gupta",
      position: "Placement-Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/paras-gupta-243333260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Paras_Gupta.jpg",
    },
    {
      name: "Kissan Dalai",
      position: "Placement Coordinator",
      branch: "ME",
      linkedin: "",
      image_name: "",
    },
    

  ];

  const AssistantStudentPlacementcordinators2027 = [
    {
      name: "Tiya Jaman",
      position: "Assistant Placement Coordinator",
      branch: "ECE",
      linkedin: "http://linkedin.com/in/tiya-6b0386283",
      image_name: "tiya.jpeg",
    },
    {
      name: "Rishabh Shukla",
      position: "Assistant Placement Coordinator",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/rishabh-shukla-5a691930a/",
      image_name: "Rishabh _Shukla.png",
    },
    {
      name: "Ramu Yadav",
      position: "Assistant Placement Coordinator",
      branch: "CSE",
      linkedin: "http://www.linkedin.com/in/mrkhiladi123",
      image_name: "Ramu_Yadav.png",
    },

    {
      name: "Shubham Kumar",
      position: "Assistant Placement Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/shubham-kumar-68a31b262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Shubham_kumar_ee.jpg",
    },
    {
      name: "Abhijeet Raj",
      position: "Assistant Placement Coordinator",
      branch: "CE",
      linkedin: "",
      image_name: "",
    },
    {
      name: "Aditya Mishra",
      position: "Assistant Placement Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/aditya-mishra-36aa04345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "",
    },


  ];

  const studentActivityCoordinators2026 = [
    {
      name: "Shivam Kumar Safi",
      position: "Activity Coordinator",
      branch: "EE",
      linkedin: "https://linkedin.com/in/shivam-kumar-safi",
      image_name: "Shivam_Kumar_Safi.jpg",
      designation: "Team Lead",
    },
    {
      name: "Raghav Jangir",
      position: "Activity Coordinator",
      branch: "ME",
      linkedin: "",
      image_name: "",
    },
    {
      name: "Priyanshu Bariyar",
      position: "Activity Cordinator",
      branch: "CSE",
      linkedin: "",
      image_name: "",
    },
    {
      name: "Mudavath Pooja",
      position: "Activity Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/mudavathpooja",
      image_name: "Mudavath_Pooja.jpg",
    },
    {
      name: "Suman Kumar Verma",
      position: "Activity Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/shashwatest/",
      image_name: "Suman Kumar Verma - Shashwat.png",
    },
   
  ];

  const AssistantStudentActivityCoordinators2027 = [
    {
      name: "Priyanshu Agrawal",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/priyanshu-agrawal-0924aa319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "priyanshu_agrawal.png",
    },
    {
      name: "Abhishek Kumar",
      position: "Activity Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/abhikumar24?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Abhishek_Kumar.jpg",
    },
    {
      name: "Neha Kumari",
      position: "Activity Cordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/neha-kumari-a31a992ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Neha_Garg.jpg",
    },
    {
      name: "Pragya Tripathi",
      position: "Activity Coordinator",
      branch: "MA",
      linkedin: "http://www.linkedin.com/in/pragya-tripathi-767489288",
      image_name: "PRAGYA_TRIPATHI.jpg",
    },
    {
      name: "Rohan Agrahari",
      linkedin: "https://www.linkedin.com/in/rohan-agrahari-964478329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Activity Cordinator",
      branch: "CE",
      image_name: "Rohan_Agrahari.jpg",
    },
    {
      name: "Vishal Kumar Vaibhav",
      linkedin: "https://www.linkedin.com/in/vishal-kumar-vaibhav-68542a336?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Activity Cordinator",
      branch: "ECE",
      image_name: "Vishal_Kumar_Vaibhav.jpg",
    },
  ];

  const WebsiteAndMediaCoordinators = [
    {
      name: "Aditya Srivastav",
      position: "Website and Media Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/aditya-srivastav-125744276",
      image_name: "Aditya_Srivastav.jpg",
      designation: "Team Lead",
    },
    {
      name: "Priyanshu Ranjan",
      position: "Website and Media Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/priyanshu-ranjan-016p?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Priyanshu_Ranjan.jpg",
    },
    {
      name: "Anand Rao Bauddh",
      position: "Website and Media Coordinator",
      branch: "ME",
      linkedin: "https://in.linkedin.com/in/anand-rao-bauddh-ba2086271",
      image_name: "anand_b.jpg",
    },
    {
      name: "Saurabh Kumar Gupta",
      position: "Website and Media Coordinator",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/saurabh-kumar-gupta-3ba26b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Saurabh_Kumar_Gupta.jpg",
    },
    {
      name: "Ayush Raj",
      linkedin: "https://www.linkedin.com/in/ayusharyanraj",
      position: "Website and Media Coordinator",
      branch: "EE",
      image_name: "ayusharyan_raj.png",
    },
    {
      name: "Uttkarsh Tiwari",
      linkedin: "https://www.linkedin.com/in/uttkarsh-tiwari-60922a285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Website and Media Coordinator",
      branch: "CSE",
      image_name: "Uttkarsh_Tiwari.png",
    },
    {
      name: "Uttkarsh Tiwari",
      linkedin: "https://www.linkedin.com/in/uttkarsh-tiwari-60922a285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Website and Media Coordinator",
      branch: "CSE",
      image_name: "Uttkarsh_Tiwari.png",
    },
     {
      name: "Saurabh Verma",
      linkedin: "https://www.linkedin.com/in/saurabh-verma-2b87a9290/",
      position: "Website and Media Coordinator",
      branch: "ECE",
      image_name: "Saurabh_Verma.png",
    },
    {
      name: "Pooja Kumari",
      linkedin: "https://www.linkedin.com/in/pooja-kumari-nitmz/",
      position: "Website and Media Coordinator",
      branch: "ECE",
      image_name: "POOJA_KUMARI.jpg",
    },
    {
      name: "Arman Kumar",
      linkedin: "https://www.linkedin.com/in/arman-kumar-760043282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Website and Media Coordinator",
      branch: "ECE",
      image_name: "Arman_Kumar.jpg",
    },
    {
      name: "Paidi Upendar Sai",
      linkedin: "https://www.linkedin.com/in/paidi-upender-sai-a63946300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Website and Media Coordinator",
      branch: "ME",
      image_name: "Paidi_Upender_Sai.jpg",
    },

  ];


  const associateMembers = [
    {
      name: "Suman Singh",
      position: "Associate Members",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/suman-singh-99a1911a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Suman_Singh.jpg",
    },
    {
      name: "Priti Sinha",
      position: "Associate Members",
      branch: "CSE",
      linkedin: "http://www.linkedin.com/in/priti-sinha-341359260",
      image_name: "Priti_Sinha.jpg",
    },
    {
      name: "Ashwini",
      position: "Associate Members",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/ashwini-undefined-0956502b6",
      image_name: "ashwini_1.jpg",
    },

    {
      name: "Snehil Verma",
      position: "Associate Members",
      branch: "CSE",
      linkedin: "",
      image_name: "",
    },
    {
      name: "Khushi Singh",
      position: "Associate Members",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/khushi-singh-a298ab1b1",
      image_name: "khushi_singh.png",
    },
    {
      name: "Masirapa Vijay Vardhan",
      position: "Associate Members",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/masirapa-vijay-vardhan/",
      image_name: "Masirapa_Vijayvardhan.jpg",
    },
    {
      name: "Pravinder",
      position: "Associate Members",
      branch: "EE",
      linkedin: "",
      image_name: "Pravinder_Dwarka.jpg",
    },
    {
      name: "Anshu",
      position: "Associate Members",
      branch: "ME",
      linkedin: "",
      image_name: "",
    },
    {
      name: "Rayudu Pooja Amrutha",
      position: "Associate Members",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/pooja-amrutha-rayudu-1999332b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Rayudu_Pooja_Amrutha.jpg",
    },
    {
      name: "Shubham Kumar",
      position: "Associate Members",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/shubham-kumar-41a821365?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Shubham_Kumar.jpg",
    },
    {
      name: "Piyush Dev",
      position: "Associate Members",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/piyush-dev-bb9838319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Piyush_Dev.jpg",
    },
    {
      name: "Manvi Chauhan",
      position: "Associate Members",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/manvi-chauhan-613840327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Manvi_Chauhan.jpg",
    },

  ];


  return (
    <div className="team-container" id="team">
      <h2 className="team-container-title  py-2">Office TEAM</h2>
      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Training & Placement Office
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {teamMembers.map((member, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(\/assets/img/team/${member.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{member.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div>{member.name}</div>
                <div style={{ whiteSpace: "pre-line" }}>{member.position}</div>
                <div>Phone: {member.phone}</div>
                <div>Email: {member.email}</div>
              </div>

              {index === 0 && member ? (
                <div className="relative right-1">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/img/team/linkedin.png"
                      alt="LinkedIn"
                      style={{
                        width: "70px",
                        height: "24px",
                        marginLeft: "0px",
                      }}
                    />
                  </a>
                </div>
              ) : (
                ""
              )}
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
              backgroundImage: `url(\/assets/img/team/${graduateexecutive.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{graduateexecutive.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{graduateexecutive.name}</div>
                <div>{graduateexecutive.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        STUDENT PLACEMENT COORDINATORS 2026
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentPlacementcordinators2026.map((placementcoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(\/assets/img/team/${placementcoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{placementcoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{placementcoordinator.name}</div>
                <div>{placementcoordinator.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
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
              backgroundImage: `url(/assets/img/team/${activityCoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{activityCoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{activityCoordinator.name}</div>
                <div>{activityCoordinator.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

       <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Website and Media Coordinators{" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {WebsiteAndMediaCoordinators.map((mediamember, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(/assets/img/team/${mediamember.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{mediamember.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{mediamember.name}</div>
                <div>{mediamember.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        ASSISTANT STUDENT PLACEMENT COORDINATORS 2027
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {AssistantStudentPlacementcordinators2027.map((placementcoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(\/assets/img/team/${placementcoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{placementcoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{placementcoordinator.name}</div>
                <div>{placementcoordinator.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>



      <h4 className="team-container-sub-title lg:text-2xl md:text-xl text-md">
        Assistant Student Activity Cordinators (2027 Batch){" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {AssistantStudentActivityCoordinators2027.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
            style={{
              backgroundImage: `url(/assets/img/team/${activityCoordinator.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{activityCoordinator.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{activityCoordinator.name}</div>
                <div>{activityCoordinator.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
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
              backgroundImage: `url(/assets/img/team/${excutive.image_name})`,
            }}
          >
            <div className="team-card-bottom">
              <div>{excutive.name}</div>
            </div>
            <div className="team-card-bottom-on-hover">
              <div>
                <div className="font-bold">{excutive.name}</div>
                <div>{excutive.position}</div>
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
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* </div> */}
      </div>

     
    </div>
  );
};

export default Team;
