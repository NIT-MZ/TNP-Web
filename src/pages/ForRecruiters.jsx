import React from "react";
import '../stylesheets/recruiters.scss';

const ForRecruiters = () => {
  return (
    <div className="recruiters-container">
      <div className="recruitment-title">RECRUITERS GUIDE</div>
      <div className="jaf-registration-section">
        <div className="jaf-registration-card">
          <div className="jaf-registration-header">
            <h3>Job Application Form (JAF)</h3>
            <p className="jaf-registration-subtitle">Start your recruitment process with us</p>
          </div>
          <div className="jaf-registration-content">
            <p>To recruit talented students from NIT Mizoram, please fill out our Job Application Form with your company and job profile details.</p>
          
          </div>
          <a
            href="https://forms.gle/LeYQhi8EJeDCAVBF7"
            target="_blank"
            rel="noopener noreferrer"
            className="jaf-button-wrapper"
          >
            <button className="jaf-cta-button">
              Fill Up JAF Form
              <span className="button-arrow">→</span>
            </button>
          </a>
        </div>
      </div>

      <div className="recruitment-title">OUR RECRUITMENT PROCESS</div>
      <div className="recruitment-procedure-card">
        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">1</div>
          <div className="recruiter-procedure-card-content">The Training and Placement Office invites organizations to participate in the recruitment process. Organizations may also express interest by contacting the office at tnp@nitmz.ac.in</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">2</div>
          <div className="recruiter-procedure-card-content">Interested organizations are required to submit a Job Application Form (JAF) for each role. Upon receipt, the details are reviewed and the organization is registered for further coordination.</div>
        </div>

        <div className="recruiter-procedure-card ">
          <div className="recruiter-procedure-list-custom">3</div>
          <div className="recruiter-procedure-card-content">Organizations may conduct pre-placement talks and request student profiles and resumes, along with preferred dates for the selection process.</div>
        </div>

        <div className="recruiter-procedure-card ">
          <div className="recruiter-procedure-list-custom">4</div>
          <div className="recruiter-procedure-card-content">Shortlisting of candidates may be carried out based on resumes or through assessments such as tests or group discussions.</div>
        </div>

        <div className="recruiter-procedure-card ">
          <div className="recruiter-procedure-list-custom">5</div>
          <div className="recruiter-procedure-card-content">Shortlisted candidates are informed through the Placement Office.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">6</div>
          <div className="recruiter-procedure-card-content">The Placement Office schedules interviews in consultation with the organization, considering factors such as role requirements, candidate preferences, and availability.</div>
        </div>

        <div className="recruiter-procedure-card">
          <div className="recruiter-procedure-list-custom">7</div>
          <div className="recruiter-procedure-card-content">After completion of the selection process, organizations are requested to share the final list of selected candidates on the same day.</div>
        </div>
      </div>

      {/* Why Recruit from Us Section */}
      <div className="recruitment-title" style={{ marginTop: "50px" }}>WHY RECRUIT FROM NIT MIZORAM?</div>
      <div className="why-recruit-section">
        <div className="why-recruit-point">
          <div className="why-recruit-number">1</div>
          <div className="why-recruit-content">
            <h4>Quality Education</h4>
            <p>Our students are trained by experienced faculty with strong academic foundation in engineering and technology.</p>
          </div>
        </div>
        
        <div className="why-recruit-point">
          <div className="why-recruit-number">2</div>
          <div className="why-recruit-content">
            <h4>Innovation & Creativity</h4>
            <p>Students actively participate in research projects, hackathons, and innovation competitions.</p>
          </div>
        </div>
        
        <div className="why-recruit-point">
          <div className="why-recruit-number">3</div>
          <div className="why-recruit-content">
            <h4>Proven Track Record</h4>
            <p>Consistent placement success with top companies like Juspay, Accenture, Infosys, Deloitte and many more.</p>
          </div>
        </div>
        
        <div className="why-recruit-point">
          <div className="why-recruit-number">4</div>
          <div className="why-recruit-content">
            <h4>Diverse Talent Pool</h4>
            <p>Students from various backgrounds with expertise across multiple engineering disciplines.</p>
          </div>
        </div>
        
        <div className="why-recruit-point">
          <div className="why-recruit-number">5</div>
          <div className="why-recruit-content">
            <h4>Technical Excellence</h4>
            <p>Strong foundation in core subjects with hands-on experience in latest technologies.</p>
          </div>
        </div>
        
        <div className="why-recruit-point">
          <div className="why-recruit-number">6</div>
          <div className="why-recruit-content">
            <h4>Dedicated Support</h4>
            <p>Our TNP office provides complete support throughout the recruitment process.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForRecruiters;