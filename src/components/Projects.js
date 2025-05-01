import React from 'react';

function Projects() {
  return (
    <div className="container mt-5">
      <div className="p-4 shadow rounded bg-white">
        <h2 className="text-primary mb-4 text-center">🚀 Projects</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Case Study 1:</strong> PHP-based Web Application
          </li>
          <li className="list-group-item">
            <strong>Case Study 2:</strong> React + Laravel Full-Stack Application
          </li>
          <li className="list-group-item">
            <strong>TechFlask:</strong> Entrepreneurial Innovation Project
          </li>
          <li className="list-group-item">
            <strong>PedalNoMad:</strong> Technopreneurship Business Model
          </li>
          <li className="list-group-item">
            <strong>Electronic Medical Record (EMR) System:</strong> Capstone Project 1
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
