import React from "react";
import "../stylesheets/NewsandEvents.scss";

const ListGroupItemClass =
  "list-group-item d-flex justify-content-between align-items-center md:font-bold ";

const items = [
  "Registration of Companies for 2025",
  "Sagacious IP conducted a placement drive at NIT Mizoram in June 2024.",
  "Vedanta conducted a placement drive at NIT Mizoram in June 2024.",
  "Proxelera has been running an ongoing recruitment drive at NIT Mizoram.",
  "Sagacious IP has been running an ongoing recruitment drive at NIT Mizoram.",
  "Capegimini has been conducting an ongoing placement drive at NIT Mizoram.",
  "Hexaware will conduct a recruitment event at NIT Mizoram in December 2024.",
  "Bajaj Capital held a recruitment session at NIT Mizoram in February 2024.",
  "Vedanta held a hiring session at NIT Mizoram in February 2024.",
  "Bakliwal Tutorials organized a recruitment drive at NIT Mizoram in February 2024.",
  "MAQ Software held a placement drive at NIT Mizoram in March 2024.",
  "Ashok Leyland conducted a hiring event at NIT Mizoram in March 2024.",
  "Tutorials Point conducted a recruitment event at NIT Mizoram in March 2024.",
  "Tech Mahindra conducted a placement drive at NIT Mizoram in March 2024.",
  "Talent Serve conducted a recruitment drive at NIT Mizoram in March 2024.",
  "Fitjee conducted campus placements at NIT Mizoram in January 2024.",
  "Mahindra & Mahindra conducted a placement event at NIT Mizoram in January 2024.",
  "Physics Wallah facilitated a recruitment session at NIT Mizoram in January 2024.",
  "Shadow Fax conducted a placement drive at NIT Mizoram in January 2024.",
  "MYways.ai conducted a hiring event at NIT Mizoram in January 2024.",
  "KEC International organized a placement drive at NIT Mizoram in January 2024.",
  "Nvidia (For Girls) conducted a placement event at NIT Mizoram in January 2024.",
  "SLB held a hiring event at NIT Mizoram in January 2024.",
  "Infosys conducted a placement drive at NIT Mizoram in January 2024.",
  "Go Digit conducted a hiring event at NIT Mizoram in January 2024.",
  "Apollo International held a placement drive at NIT Mizoram in January 2024.",
  "221 Baker Street conducted a recruitment drive at NIT Mizoram in January 2024.",
  "Nation with Namo facilitated a placement drive at NIT Mizoram in December 2023.",
  "Bosch held a recruitment event at NIT Mizoram in December 2023.",
  "Aficionado Technologies conducted a hiring session at NIT Mizoram in December 2023.",
  "Code Young held a hiring drive at NIT Mizoram in December 2023.",
  "Mecon Limited held a hiring event at NIT Mizoram in December 2023.",
  "TCS has been running an ongoing placement drive at NIT Mizoram since December 2023.",
  "TATA Power held a recruitment event at NIT Mizoram in December 2023.",
  "Unacademy carried out a placement drive at NIT Mizoram in November 2023.",
  "Cubastion carried out a placement drive at NIT Mizoram in November 2023.",
  "Mc Kinley Rice carried out a placement session at NIT Mizoram in November 2023.",
  "Growth Jockey conducted a hiring drive at NIT Mizoram in November 2023.",
  "Corizo organized a recruitment event at NIT Mizoram in November 2023.",
  "TA Digital facilitated a placement drive at NIT Mizoram in November 2023.",
  "TATA TCE held a recruitment drive at NIT Mizoram in November 2023.",
  "MU Sigma organized a campus placement at NIT Mizoram in November 2023.",
  "Copperpod IP organized a placement drive at NIT Mizoram in November 2023.",
  "LnT has been running an ongoing recruitment drive at NIT Mizoram since November 2023.",
  "Consultadd held a hiring event at NIT Mizoram in October 2023.",
  "Growupp facilitated a placement session at NIT Mizoram in October 2023.",
  "CYFuture organized a recruitment event at NIT Mizoram in October 2023.",
  "Winjit conducted a hiring session at NIT Mizoram in October 2023.",
  "NeenOpal hosted a placement event at NIT Mizoram in October 2023.",
  "Anora Labs facilitated a campus recruitment at NIT Mizoram in October 2023.",
  "LumiqAi held a recruitment drive at NIT Mizoram in October 2023.",
  "Tecchture organized a hiring event at NIT Mizoram in October 2023.",
  "C-DAC Noida held a recruitment drive at NIT Mizoram in October 2023.",
  "C-DAC Kolkata organized a campus placement at NIT Mizoram in October 2023.",
  "Fitjee conducted campus placements at NIT Mizoram in September 2023.",
  "Tecnipenergies facilitated a placement session at NIT Mizoram in September 2023.",
  "Teradata conducted a recruitment drive at NIT Mizoram in September 2023.",
  "3rditech organized a campus placement at NIT Mizoram in September 2023.",
  "Certcube held a hiring event at NIT Mizoram in September 2023.",
  "Infra-Market conducted a recruitment drive at NIT Mizoram in September 2023.",
  "DeltaX conducted a placement session at NIT Mizoram in September 2023.",
  "Vassar Labs conducted a campus recruitment at NIT Mizoram in September 2023.",
  "Alstom conducted a placement drive at NIT Mizoram in August 2023.",
  "Deloitte organized a recruitment event at NIT Mizoram in August 2023.",
  "Intellipaat hosted a campus placement at NIT Mizoram in August 2023.",
  "Qbit Labs held a placement drive at NIT Mizoram in August 2023.",
  "Planet Spark organized a recruitment event at NIT Mizoram in August 2023.",
  "MoneyApp hosted a campus placement at NIT Mizoram in August 2023.",
  "Omspace held a hiring event at NIT Mizoram in August 2023.",
  "Foundation AI conducted a placement drive at NIT Mizoram in August 2023.",
];

const NewsandEvents = () => {
  return (
    <div className="events-section-container">
      <section id="atAGlance" className="atAGlance" data-aos="fade-up">
        <div className="section-title">
          <div className="at-a-glance-title">News and Notices</div>
          <p className="font-bold">
            Various activities happening in & around the campus by Training &
            Placement Cell of NIT Mizoram
          </p>
        </div>
        <div className="card-group text-center">
          <div className="card mb-3">
            <div className="card-header sticky-top bg-gradient-to-r from-[#f3c031] to-[#43920d]">
              <h4 className="card-title text-lg">News & Notice</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
                <div className="news-ticker-vertical">
                  <div className="news-ticker-vertical-content">
                    <ul className="list-group list-group-flush ">
                      {items.map((item, index) => (
                        <li key={index} className={ListGroupItemClass}>
                          {item}
                        </li>
                      ))}
                      <li className="gap"></li> {/* Gap between the two sets */}
                      {items.map((item, index) => (
                        <li
                          key={`${index}-duplicate`}
                          className={ListGroupItemClass}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsandEvents;
