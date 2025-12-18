import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Student Management System</h1>
        
        <section className="about-section">
          <h2>Overview</h2>
          <p>
            The Student Management System is a modern web application built with React 
            that allows administrators to manage student information efficiently.
          </p>
        </section>

        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>✅ Add new students with complete information</li>
            <li>✅ View all students in a well-organized table</li>
            <li>✅ Delete student records</li>
            <li>✅ Form validation for data accuracy</li>
            <li>✅ Easy navigation between pages</li>
            <li>✅ Responsive design</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <h3>React</h3>
              <p>Frontend framework for building user interfaces</p>
            </div>
            <div className="tech-item">
              <h3>React Router</h3>
              <p>For multi-page navigation and routing</p>
            </div>
            <div className="tech-item">
              <h3>State Management</h3>
              <p>Using React hooks (useState) for state management</p>
            </div>
            <div className="tech-item">
              <h3>CSS</h3>
              <p>Styling for responsive and attractive UI</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Data Storage</h2>
          <p>
            All student data is stored in the application state (React useState hook). 
            This means data will be reset when the page is refreshed. For persistent 
            data storage, you can integrate this with a backend database.
          </p>
        </section>

        <section className="about-section">
          <h2>Contact</h2>
          <p>For more information or support, please contact the development team.</p>
        </section>
      </div>
    </div>
  );
}

export default About;
