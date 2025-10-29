import React from "react";

function About() {
  return (
    <div className="main-content active">
      <div className="intro">
        <h1>
          Hi 👋 I'm Buğra. AI Learner and motorcycle lover based in Izmir,
          Turkey.
        </h1>
        <p>
          I am studying Management Information Systems (EN) at Izmir Bakırçay
          University. I am very interested in AI and I am developing myself in
          this field.
        </p>
        <div className="buttons">
          <a
            href="https://calendar.google.com/calendar/u/0?cid=YnVncmF5YW5sbXpAZ21haWwuY29t"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book a Call
          </a>
          <a href="mailto:bugrayanlmz@gmail.com" className="btn btn-secondary">
            Send Mail
          </a>
        </div>
      </div>

      <section className="experience">
        <h2>Experience</h2>
        <div className="job">
          <div className="job-header">
            <span className="job-title">IT Intern at Kocaer Steel</span>
            <span className="job-date">Jun 2025 - Jul 2025</span>
          </div>
          <p className="job-description">
            I developed the front-end of the 'Kocaer Supplier Form' by
            implementing supplier/administrator workflows and an automated email
            system to support the company's digital transformation goals
          </p>
        </div>
        <div className="job">
          <div className="job-header">
            <span className="job-title">Python Tutor at Kodland</span>
            <span className="job-date">May 2023 - Jun 2024</span>
          </div>
          <p className="job-description">
            I was teaching 8-12 year olds the basics of the Python language and
            showing them how to make games with the knowledge we learned.
          </p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="job">
          <div className="job-header">
            <span className="job-title">İzmir Bakırçay University</span>
            <span className="job-date">2021 - Now</span>
          </div>
          <p className="job-description">Management Information Systems(EN)</p>
        </div>
      </section>
    </div>
  );
}

export default About;
