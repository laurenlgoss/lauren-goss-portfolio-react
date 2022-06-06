import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBadgeColor from '../utils/badgeColor';

function Project({
  columnSide,
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
            <div className="project-icons-container">
              <a
                href={githubRepo}
                target="_blank"
                className={`${lightIcons ? 'light' : ''}`}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
              </a>
              {deployedApp ? (
                <a
                  href={deployedApp}
                  target="_blank"
                  className={`${lightIcons ? 'light' : ''}`}
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={['fas', 'desktop']} size="3x" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
          <h1>
            <strong>{title}</strong>
          </h1>
          <div className="mb-3 alt-font">{description}</div>
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

    // <div className="card project-card project-border" style={{ width: 'auto' }}>
    //   <div className="project-img-container">
    //     <img className="card-img-top" src={imgSrc} alt={`${title} dashboard`} />
    // <div className="project-icons-container">
    //   <a
    //     href={githubRepo}
    //     target="_blank"
    //     className={`${lightIcons ? 'light' : ''}`}
    //     rel="noreferrer"
    //   >
    //     <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
    //   </a>
    //   {deployedApp ? (
    //     <a
    //       href={deployedApp}
    //       target="_blank"
    //       className={`${lightIcons ? 'light' : ''}`}
    //       rel="noreferrer"
    //     >
    //       <FontAwesomeIcon icon={['fas', 'desktop']} size="3x" />
    //     </a>
    //   ) : (
    //     <></>
    //   )}
    // </div>
    //   </div>
    //   <div className={`${columnSide === 'left' ? 'text-end' : ''}`}>
    //     <h4 className="project-title">{title}</h4>
    //     <p className="alt-font">{description}</p>

    //     {/* Collaborative VS Solo */}
    // <p>
    //   {columnSide === 'right' ? (
    //     <span className={`badge badge-pill default-pill`}>
    //       {numOfGroupMembers > 1 ? 'Collaborative' : 'Solo'}
    //     </span>
    //   ) : null}
    //   {[...Array(numOfGroupMembers)].map((element) => {
    //     return (
    //       <FontAwesomeIcon
    //         icon={['fas', 'user']}
    //         size="2x"
    //         className="mx-1"
    //         style={{ verticalAlign: 'middle' }}
    //       />
    //     );
    //   })}
    //   {columnSide === 'left' ? (
    //     <span className={`badge badge-pill default-pill`}>
    //       {numOfGroupMembers > 1 ? 'Collaborative' : 'Solo'}
    //     </span>
    //   ) : null}
    //   {/* {myRole ? myRole : null} */}
    // </p>

    //     <div>
    //       {languages.map((language) => {
    //         return (
    //           <span className={`badge badge-pill ${getBadgeColor(language)}`}>
    //             {language}
    //           </span>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Project;
