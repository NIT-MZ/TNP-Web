import React from "react";
import '../stylesheets/recruiters.scss';

const ForRecruiters = () => {
  return (
    <div className="recruiters-container">
      <div className="recruitment-title">RECRUITERS GUIDE</div>
      <div className="recruiter-procedure-card-container">
        <div className="recruiter-procedure-card rpc1">
          <div className="recruiter-procedure-card-title">Registration / JAF </div>
          <div className="recruiter-procedure-card-content">
            <ul style={{ listStyleType: "square" }}>
              <li>You are asked to fill up the JAF form, if your company wants to hire from NIT Mizoram.</li>
            </ul>
          </div>
          <a
            href="https://forms.gle/LeYQhi8EJeDCAVBF7"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="recruiter-registration-button">Fill Up JAF</button>
          </a>
        </div>
      </div>

      <div className="recruitment-title">OUR RECRUITMENT PROCESS</div>
      <div className="recruitment-procedure-card">
        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">1</div>
          <div className="recruiter-procedure-card-content">The placement office sends invitations to companies and organizations along with relevant information. You can also send us a mail at tnp@nitmz.ac.in regarding the same.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">2</div>
          <div className="recruiter-procedure-card-content">Companies and organizations interested to recruit may fill Job Application Form (JAF) for each profile they wish to hire for. Once the filled JAF with all the required details is received, companies are registered and are contacted for further processes</div>
        </div>

        <div className="recruiter-procedure-card ">
          <div className="recruiter-procedure-list-custom">3</div>
          <div className="recruiter-procedure-card-content">Companies/Organizations can conduct the pre-processes (Preplacement talk, etc.) and can request for Student details and CVs along with the preferred date.</div>
        </div>

        <div className="recruiter-procedure-card ">
          <div className="recruiter-procedure-list-custom">4</div>
          <div className="recruiter-procedure-card-content">The company will then shortlist the students either based on their CVs or they can conduct a Test/GD for shortlisting the students.</div>
        </div>

        <div className="recruiter-procedure-card ">
          <div className="recruiter-procedure-list-custom">5</div>
          <div className="recruiter-procedure-card-content">Shortlisted students are notified.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">6</div>
          <div className="recruiter-procedure-card-content">The placement office allots the dates for campus interviews, by considering factors like student preference, job profile, compensation, history with the campus, etc.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">7</div>
          <div className="recruiter-procedure-card-content">After completion of the selection process, the company is required to announce the final list of the students on the same day itself.</div>
        </div>
      </div>
    </div>
  );
};

export default ForRecruiters;
