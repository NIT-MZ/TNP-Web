import React from "react";
import '../stylesheets/recruiters.scss';

const ForRecruiters = () => {


  return (
    <div className="recruiters-container">
      <div className="recruitment-title">RECRUITERS GUIDE</div>
      <div className="recruiter-procedure-card-container">
        <div className="recruiter-procedure-card rpc1">
          <div className="recruiter-procedure-card-title">1. Registration </div>
          <div className="recruiter-procedure-card-content">
            <ul style={{ listStyleType: "square" }}>
              <li>You are asked to complete the Registration, if your company wants to hire from NIT Mizoram.</li>
            </ul>
          </div>
          <div className="recruiter-registration-button">Recruiter Registration</div>
        </div>

        <div className="recruiter-procedure-card rpc1">
          <div className="recruiter-procedure-card-title">2. Verification </div>
          <div className="recruiter-procedure-card-content">
            <ul style={{ listStyleType: "square" }}>
              <li>You will receive a link in that email after providing your email address.</li>
              <li>After you click that link, a page will reroute you to the following stage, where you may confirm that the email you entered is, in fact, yours.</li>
              <li>After the email address is confirmed, you must enter your information and create a password that will allow you to log in later.</li>
            </ul>
          </div>
        </div>

        <div className="recruiter-procedure-card rpc1">
          <div className="recruiter-procedure-card-title">3. JAF </div>
          <div className="recruiter-procedure-card-content">
            <ul style={{ listStyleType: "square" }}>
              <li>After entering your login information, make an AF for the necessary Training/Placement session.</li>
            </ul>
          </div>
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
          <div className="recruiter-procedure-card-content">Companies and organizations interested to recruit, register on the Training and Placement website.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">3</div>
          <div className="recruiter-procedure-card-content">Companies can register their account on the portal, and after verification and login, they may fill Job Application Form (JAF) for each profile they wish to hire for. Once the filled JAF with all the required details is received, companies are registered and are contacted for further processes.</div>
        </div>

          <div className="recruiter-procedure-card ">
            <div className="recruiter-procedure-list-custom">4</div>
            <div className="recruiter-procedure-card-content">Companies/Organizations can conduct the pre-processes (tests, assignments, etc.) can request for it along with the preferred date.</div>
          </div>

          <div className="recruiter-procedure-card ">
            <div className="recruiter-procedure-list-custom">5</div>
            <div className="recruiter-procedure-card-content">The JAF is frozen on the website by the company till a deadline, after which the student shall be able to view all the details, and the eligible students may apply. The company will then shortlist the students either based on their CVs or they can conduct a Test/GD for shortlisting the students.</div>
          </div>

          <div className="recruiter-procedure-card ">
            <div className="recruiter-procedure-list-custom">6</div>
            <div className="recruiter-procedure-card-content">Shortlisted students are notified.</div>
          </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">7</div>
          <div className="recruiter-procedure-card-content">The placement office allots the dates for campus interviews, by considering factors like student preference. job profile, compensation, history with the campus, etc.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">8</div>
          <div className="recruiter-procedure-card-content">After completion of the selection process, the company is required to announce the final list of the students on the same day itself.</div>
        </div>
      </div>


    </div>
  );
};

export default ForRecruiters;
