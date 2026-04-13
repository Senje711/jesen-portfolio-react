import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import safelink_landing from '../../assets/safelink_landing.jpg';
import mypc_landing from '../../assets/mypc_landing.jpg';
import room_reservation from '../../assets/room_reservation.jpg';
import weather_app from '../../assets/weather_app.jpg';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Services = () => {
  const ref = useIntersectionObserver();
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const handleGitHubClick = (url) => {
    window.open(url, '_blank');
  };

  // Map image filenames to imported images
  const imageMap = {
    'safelink_landing.jpg': safelink_landing,
    'mypc_landing.jpg': mypc_landing,
    'room_reservation.jpg': room_reservation,
    'weather_app.jpg': weather_app,
  };

  return (
    <div id="services" className="services scroll-animate" ref={ref}>
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container projects-grid">
        {Services_Data.map((project) => {
          return (
            <div key={project.id} className="project-card">
              {project.image && (
                <div className="project-image">
                  <img
                    src={imageMap[project.image] || project.image}
                    alt={project.title}
                  />
                </div>
              )}

              <div className="project-content">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <span className="project-role">{project.role}</span>
                </div>

                <p className="project-description">{project.description}</p>

                {project.technologies && (
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-actions">
                  <button
                    className="project-github-btn"
                    onClick={() => handleGitHubClick(project.github)}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View Code →
                  </button>
                  <button
                    className="project-details-btn"
                    onClick={() => openProjectModal(project)}
                    aria-label={`View details for ${project.title}`}
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close"
              onClick={closeProjectModal}
              aria-label="Close project details"
            >
              ✕
            </button>

            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="project-modal-image"
              />
            )}

            <div className="project-modal-content">
              <div className="project-modal-header">
                <h2>{selectedProject.title}</h2>
                <span className="project-role-large">
                  {selectedProject.role}
                </span>
              </div>

              <p className="project-modal-desc">{selectedProject.details}</p>

              {selectedProject.technologies && (
                <div className="project-tech-full">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge-large">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-modal-actions">
                <button
                  className="project-github-btn-large"
                  onClick={() => handleGitHubClick(selectedProject.github)}
                >
                  View on GitHub →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
