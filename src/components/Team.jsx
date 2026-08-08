import "../stylesheets/team.scss";

const Team = () => {
  // Array containing information for each team member
  const teamMembers = [
    {
      name: "Prof. Sukanta Roy",
      position:
        "Dean (Academic),Faculty In-charge Training and Placement Office Chairman,Training and Placement Committee",
      phone: "+91-9035385841",
      email: "sukanta.me@nitmz.ac.in / tnp@nitmz.ac.in",
      linkedin: "https://www.linkedin.com/in/dr-sukanta-roy-75a9b13b",
      image_name: "dr_sukanta_roy.png",
    },

    {
      name: "Dr. Rajkumar Shufen",
      position: "Assistant TPO",
      phone: "+91 99542 46894",
      email: "rajkumar.me@nitmz.ac.in",
      image_name: "Shufen_Sir.jpg",
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
      name: "Dr. Nikhil Srivastava",
      position: "TPO, MA",
      phone: "+91-78382 35745",
      email: "nikhil.math@nitmz.ac.in",
      image_name: "Dr_Nikhil.jpeg",
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
      name: "Tata Sai Vivek Vardhan",
      position: "Graduate Executive",
      phone: "+91-63036 49750",
      linkedin: "https://www.linkedin.com/in/sai-vivek-tata-049210280",
      image_name: "sai_vivek.jpg",
    },
    {
      name: "Satvik Sharma",
      position: "Graduate Executive",
      phone: "+91-93043 37688",
      linkedin: "https://www.linkedin.com/in/satviksharmaa/",
      image_name: "Satvik_Sharma.jpg",
    },


  ];

  const studentPlacementcordinators2026 = [
    {
      name: "Ramu Yadav",
      position: "Placement Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/mrkhiladi123/",
      image_name: "Ramu_Yadav_CS.jpeg",
      designation: "Team Lead",
    },
    {
      name: "Tiya Jaman",
      position: "Placement Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/tiya-6b0386283/",
      image_name: "Tiya_Jaman.jpg",
      designation: "Team Lead",
    },

    {
      name: "Vishal Kumar Vaibhav",
      position: "Placement Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/vishal-kumar-vaibhav-68542a336",
      image_name: "Vishal_Kumar_Vaibhav.jpg",
    },
    {
      name: "Rayudu Pooja Amrutha",
      position: "Placement Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/pooja-amrutha-1999332b3/",
      image_name: "POOJA27.jpg",
    },
    {
      name: "Abhishek Kumar",
      position: "Placement Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/abhikumar24/",
      image_name: "Abhishek_Kumar.jpg",
    },
    {
      name: "Anmol Kumar",
      position: "Placement Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/anmol-kumar-53941b290/",
      image_name: "Anmol_Kumar.jpg",
    },
    {
      name: "Kamal Nayan",
      position: "Placement Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/kamal-nayan-16a592345/",
      image_name: "Kamal_Nayan.jpg",
    },
    {
      name: "Piyush Dev",
      position: "Placement Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/piyush-dev-nitmz/",
      image_name: " Piyush_Dev.jpeg",
    },
    {
      name: "Manvi Chauhan",
      position: "Placement Coordinator",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/manvi-chauhan-a16382283/",
      image_name: "Manvi_Chauhan.jpg",
    },
    {
      name: "Saurabh Kumar Gupta",
      position: "Placement Coordinator",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/saurabh-kumar-gupta-3ba26b315?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image_name: "Saurabh_Gupta.jpeg",
    },
    {
      name: "Aditya Mishra",
      position: "Placement Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/aditya-mishra-36aa04345/",
      image_name: "Aditya_Mishra27.jpg",
    },
    {
      name: "Neha Kumari",
      position: "Placement Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/neha-kumari-a31a992ab/",
      image_name: "Neha_Kumari.png",
    },
    {
      name: "Amrita Vani",
      position: "Placement Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/amrita-vani-512a86214/",
      image_name: "Amrita_Vani.jpg",
    },
  ];


  const AssistantStudentPlacementcordinators2028 = [
    {
      name: "Aratrika Pandey",
      position: "Assistant Placement Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/aratrika-pandey-340009324",
      image_name: "aratrika_pandey.jpeg",
    },
    {
      name: "Naman Shukla",
      position: "Assistant Placement Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/naman-shukla-11baa4328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Naman_shukla.jpeg",
    },
    {
      name: "Aman Kumar",
      position: "Assistant Placement Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/aman-kumar-nitmz?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image_name: "Aman_Kumar.png",
    },

    {
      name: "Vansh Kailwal",
      position: "Assistant Placement Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/vansh-kailwal-09124938b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image_name: "Vansh_Kailwal.jpg",
    },
    {
      name: "Abhishek Yadav",
      position: "Assistant Placement Coordinator",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/abhishekyadav59859/",
      image_name: "Abhishek_Yadav.jpeg",
    },
    {
      name: "Sai Shubham Biswal",
      position: "Assistant Placement Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/sai-shubham-biswal-8a2461305",
      image_name: "Sai_Shubham_Biswal.jpg",
    },


  ];

  const studentActivityCoordinators2026 = [
    {
      name: "Shubham Kumar",
      position: "Activity Coordinator",
      branch: "EE",
      linkedin: "https://www.linkedin.com/in/shubham-kumar-68a31b262/",
      image_name: "Shubham_Kumar_EE27.jpeg",
      designation: "Team Lead",
    },
    {
      name: "Grace Lalchawimawii",
      position: "Activity Coordinator",
      branch: "CE",
      linkedin: "https://www.linkedin.com/in/grace-lalchawimawii-517ba02a3/",
      image_name: "Grace_Lalchawimawii.jpg",
    },
    {
      name: "Uttkarsh Tiwari",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/uttkarsh-tiwari-60922a285/",
      image_name: "Uttkarsh_Tiwari27.png",
    },
    {
      name: "Saurabh Verma",
      position: "Activity Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/saurabh-verma-2b87a9290/",
      image_name: "Saurabh_Verma.jpg",
    },
    {
      name: "Namapally Sreelekha",
      position: "Activity Coordinator",
      branch: "MA",
      linkedin: "https://www.linkedin.com/in/sreelekha-nampally/",
      image_name: "Sreelekha.png",
    },
    {
      name: "K. Sai Vardhan Royal",
      position: "Activity Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/k-sai-vardhan-royal-389875413/",
      image_name: "Sai_Vardhan_Royal.jpg",
    },
    {
      name: "Vinay Tiwari",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/vinay-tiwari-19910b228/",
      image_name: "Vinay_Tiwari.png",
    },
  ];


  const AssistantStudentActivityCoordinators2028 = [
    {
      name: "Mahak Singh",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/mahaksingh1295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Mahak_Singh.jpg",
    },
    {
      name: "Routhu Devavarshini",
      position: "Activity Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/deva-varshini-routhu-ba0b97376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Devavarshini.jpg",
    },
    {
      name: "Shreya Dharmatma",
      position: "Activity Cordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/shreya-dharmatma-1635b333b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      image_name: "Shreya_Dharmatma.jpg",
    },
    {
      name: "Vanapalli Vyshnavi",
      position: "Activity Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/vanapalli-vyshnavi-04a179345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Vanapalli_Vyshnavi.jpg",
    },
    {
      name: "Saurav Kumar",
      linkedin: "https://www.linkedin.com/in/saurav-kumar-aba944314 ",
      position: "Activity Cordinator",
      branch: "CE",
      image_name: "Saurav_Kumar28.jpg",
    },
    {
      name: "Ruchi Jha",
      linkedin: "https://www.linkedin.com/in/ruchi-jha-8462312a3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      position: "Activity Cordinator",
      branch: "CE",
      image_name: "Ruchi_Jha.jpg",
    },
    {
      name: "Sakcham Kumar",
      linkedin: "https://www.linkedin.com/in/sakcham-kumar-077066332?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      position: "Activity Cordinator",
      branch: "EE",
      image_name: "Sakcham_Kumar.jpg",
    },
    {
      name: "Ridima Raj",
      linkedin: "https://www.linkedin.com/in/ridima-raj-373b7125a",
      position: "Activity Cordinator",
      branch: "EE",
      image_name: "Ridima_Raj.png",
    },
    {
      name: "Ayush Kumar",
      linkedin: "https://www.linkedin.com/in/ayush-kumar-7697a734b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      position: "Activity Cordinator",
      branch: "ME",
      image_name: "Ayush_Kumar28.jpg",
    },
    {
      name: "Rana Abhishek",
      linkedin: "https://www.linkedin.com/in/rana-abhishek-b-tech-44710a3ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      position: "Activity Cordinator",
      branch: "ME",
      image_name: "Rana_Abhishek.png",
    },
    {
      name: "Himanshu Chaudhary",
      linkedin: "https://www.linkedin.com/in/himanshu-chaudhary-018b09389?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      position: "Activity Cordinator",
      branch: "ECE",
      image_name: "Himanshu_Chaudhary.jpg",
    },

  ];

  const WebsiteAndMediaCoordinators = [
    {
      name: "Paidi Upender Sai",
      position: "Website and Media Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/paidi-upender-sai-a63946300/",
      image_name: "Paidi_Upender_Sai.png",
      designation: "Team Lead",
    },
    {
      name: "Arman Kumar",
      position: "Website and Media Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/arman-kumar-760043282/",
      image_name: "Arman_Kumar27.png",
    },
    {
      name: "Stanzin Odgyan",
      position: "Website and Media Coordinator",
      branch: "CE",
      linkedin: "",
      image_name: "Odgyan.jpeg",
    },
    {
      name: "Aditya Verma",
      position: "Website and Media Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/aditya-verma-38931b369/",
      image_name: "Aditya_Verma.jpg",
    },
    {
      name: "Anshul Singh",
      position: "Website and Media Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/anshul-singh-b69652331/",
      image_name: "Anshul_Singh.jpeg",
    },
    {
      name: "Pasham Laxmi",
      position: "Website and Media Coordinator",
      branch: "ECE",
      linkedin: "https://www.linkedin.com/in/pasham-laxmi-7b42b3411?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      image_name: "Pasham_Laxmi.jpg",
    },
    {
      name: "Dilip Sahu",
      position: "Website and Media Coordinator",
      branch: "CSE",
      linkedin: "https://www.linkedin.com/in/dilip-sahu-7b8789324/",
      image_name: "Dilip_Sahu.jpg",
    },
    {
      name: "Vasudev Suthar",
      position: "Website and Media Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/vasudev-suthar-9a9384316/",
      image_name: "Vasudev_Suthar.jpg",
    },
    {
      name: "Satarupa Maitra",
      position: "Website and Media Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/satarupa-maitra-063898413/",
      image_name: "Satarupa_Maitra_28.JPG",
    },
    {
      name: "Kavala Teja Ramya Sri",
      position: "Website and Media Coordinator",
      branch: "ME",
      linkedin: "https://www.linkedin.com/in/teja-ramya-sri-kavala-76b6a737a/",
      image_name: "Ramya_Kavala.jpg",
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
          // style={{
          //   backgroundImage: `url(\/assets/img/team/${member.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${member.image_name}`}
              alt={member.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />
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
          // style={{
          //   backgroundImage: `url(\/assets/img/team/${graduateexecutive.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${graduateexecutive.image_name}`}
              alt={graduateexecutive.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />
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
        STUDENT PLACEMENT COORDINATORS
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentPlacementcordinators2026.map((placementcoordinator, index) => (
          <div
            className="team-card"
            key={index}
          // style={{
          //   backgroundImage: `url(\/assets/img/team/${placementcoordinator.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${placementcoordinator.image_name}`}
              alt={placementcoordinator.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />
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
        Student Activity Cordinators{" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {studentActivityCoordinators2026.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
          // style={{
          //   backgroundImage: `url(/assets/img/team/${activityCoordinator.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${activityCoordinator.image_name}`}
              alt={activityCoordinator.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />

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
          // style={{
          //   backgroundImage: `url(/assets/img/team/${mediamember.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${mediamember.image_name}`}
              alt={mediamember.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />
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
        ASSISTANT STUDENT PLACEMENT COORDINATORS
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {AssistantStudentPlacementcordinators2028.map((placementcoordinator, index) => (
          <div
            className="team-card"
            key={index}
          // style={{
          //   backgroundImage: `url(\/assets/img/team/${placementcoordinator.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${placementcoordinator.image_name}`}
              alt={placementcoordinator.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />
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
        Assistant Student Activity Cordinators{" "}
      </h4>
      <div className="team-card-container">
        {/* Mapping over the teamMembers array to generate card elements */}
        {AssistantStudentActivityCoordinators2028.map((activityCoordinator, index) => (
          <div
            className="team-card"
            key={index}
          // style={{
          //   backgroundImage: `url(/assets/img/team/${activityCoordinator.image_name})`,
          // }}
          >
            <img
              src={`/assets/img/team/${activityCoordinator.image_name}`}
              alt={activityCoordinator.name}
              className="team-card-img"
              loading="lazy"
              decoding="async"
            />
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
    </div>
  );
};

export default Team;
