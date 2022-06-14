import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBadgeColor from '../utils/badgeColor';

function ProjectTile({
  deployedApp,
  description,
  githubRepo,
  imgSrc,
  languages,
  lightIcons,
  myRole,
  numOfGroupMembers,
  title,
}) {
  // Modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Image Tile */}
      <div class="project-img-wrapper" onClick={() => handleOpen()}>
        <img src={imgSrc} alt={title} className="img-fluid" />
        <div className="img-overlay">
          <div className="project-title">{title}</div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={`modal-${title}`}
        aria-describedby={`modal-${description}`}
      >
        <div class="card modal-body text-center">
          <div className="project-img-container">
            <img src={imgSrc} alt={title} className="img-fluid mx-auto mb-4" />

            {/* Links */}
            <div className="project-icons-container">
              {githubRepo ? (
                <a href={githubRepo} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
                </a>
              ) : null}
              {deployedApp ? (
                <a href={deployedApp} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fas', 'desktop']} size="3x" />
                </a>
              ) : null}
            </div>
          </div>

          <h1>
            <strong>{title}</strong>
          </h1>

          <div className="mb-3">{description}</div>

          {/* Collaborative vs. Solo */}
          <p>
            <span className={`badge badge-pill default-pill`}>
              {numOfGroupMembers > 1 ? 'Collaborative' : 'Solo'}
            </span>
            {[...Array(numOfGroupMembers)].map((element) => {
              return (
                <FontAwesomeIcon
                  icon={['fas', 'user']}
                  size="2x"
                  className="mx-1"
                  style={{ verticalAlign: 'middle' }}
                />
              );
            })}
          </p>

          {/* Languages */}
          <div>
            {languages.map((language) => {
              return (
                <span className={`badge badge-pill ${getBadgeColor(language)}`}>
                  {language}
                </span>
              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProjectTile;
