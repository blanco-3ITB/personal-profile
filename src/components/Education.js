import React from 'react';
import '../App.css';  // Import the App.css file

function Education() {
  return (
    <div className="container education-container mt-5">
      <div className="p-4 shadow rounded bg-white">
        <h2 className="education-title text-primary mb-4">📚 Education</h2>

        {/* Elementary */}
        <div className="mb-4">
          <h4 className="education-section-header">Elementary</h4>
          <p className="mb-1"><strong>Talahib Elementary School</strong> <span className="text-muted">(2010–2016)</span></p>
          <ul className="education-list">
            <li>✅ Consistent Honor Student</li>
            <li>🎓 Graduated with Honors</li>
          </ul>
        </div>

        {/* Secondary */}
        <div className="mb-4">
          <h4 className="education-section-header">Secondary</h4>
          <p className="mb-1"><strong>Bigaa Integrated National High School</strong> <span className="text-muted">(2016–2022)</span></p>
          <ul className="education-list">
            <li>💻 ICT (Information and Communication Technology) Strand</li>
            <li>🏅 With Honors</li>
          </ul>
        </div>

        {/* Tertiary */}
        <div>
          <h4 className="education-section-header">Tertiary</h4>
          <p className="mb-1"><strong>Pamantasan ng Cabuyao</strong> <span className="text-muted">(2022–Present)</span></p>
          <ul className="education-list">
            <li>🎓 Bachelor of Science in Information Technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
