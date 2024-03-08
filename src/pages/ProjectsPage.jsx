import React, { useState } from "react";
import Header from '../components/Header';
import SearchButton from '../components/sidebarProyects-components/SearchButton';
import Image from "../images/imgavatarProyec/jefe.jpg";
import Image1 from "../images/imgavatarProyec/chems.jpg";
import Image2 from "../images/imgavatarProyec/hams1.jpg";
import Image3 from "../images/imgavatarProyec/pedillos.jpg";
import Image4 from "../images/imgavatarProyec/pensando.jpg";
import "../styles/searchview.css";

const ProjectPage = () => {
  const [progress, setProgress] = useState(0);

  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const container = document.querySelector('.progress-bar');
    const containerWidth = container.offsetWidth;
    const newPosition = Math.max(0, Math.min(e.clientX - container.offsetLeft, containerWidth));
    const newProgress = Math.round((newPosition / containerWidth) * 100);
    setProgress(newProgress);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div>
      <Header />
      <SearchButton />

      <div className="container-wrapper py-10">
        {/* contenedor 1*/}
        <div className="container">
          <h2 className="title">Office management</h2>
          <p className="text">1 open tasks, 9 tasks completed</p>
          <p className="text">Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          <br /><br />
          <h3 className="subtitle">Deadline:</h3>
          <br /><br />
          <p className="text">17 Apr 2023</p>
          <br />
          <h2 className="title">Project Leader:</h2>
          <br />
          <div className="avatar">
            <img src={Image} alt="Foto del líder del proyecto" />
          </div>
          <br />
          <p className="title">Team</p>
          <br />

          <div className="team-photos">
            <div className="avatar">
              <img src={Image1} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image2} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image3} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image4} alt="Foto del miembro del equipo" />
            </div>
            <div className="team-size">
              <div className="indicator">4</div>
            </div>
          </div>

          <br />
          <div className="progress-container">
            <p className="title">Progress <span className="percentage" style={{ color: 'green' }}>{progress}%</span></p>
            <div className="progress-bar" onMouseDown={handleMouseDown}>
              <div className="progress" style={{ width: `${progress}%` }}></div>
              <div className="progress-indicator" style={{ left: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        {/* contenedor 2*/}
        <div className="container">
          <h2 className="title">Proyect Management</h2>
          <p className="text">2  open tasks, 5 tasks completed</p>
          <p className="text">Lorem ipsum is simply dummy text of the printing and typesentting industry. When an unknown printer
            took a galley of type and scrambled it...</p>
          <h3 className="subtitle">Deadline:</h3>
          <br /><br />
          <p className="text">17 Apr 2023</p>
          <br />
          <h2 className="title">Project Leader:</h2>
          <br />
          <div className="avatar">
            <img src={Image} alt="Foto del líder del proyecto" />
          </div>
          <br />
          <p className="title">Team</p>
          <br />

          <div className="team-photos">
            <div className="avatar">
              <img src={Image1} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image2} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image3} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image4} alt="Foto del miembro del equipo" />
            </div>
            <div className="team-size">
              <div className="indicator">4</div>
            </div>
          </div>

          <br />
          <div className="progress-container">
            <p className="title">Progress <span className="percentage" style={{ color: 'green' }}>{progress}%</span></p>
            <div className="progress-bar" onMouseDown={handleMouseDown}>
              <div className="progress" style={{ width: `${progress}%` }}></div>
              <div className="progress-indicator" style={{ left: `${progress}%` }}></div>
            </div>
          </div>
        </div>


        {/* contenedor 3*/}
        <div className="container">
          <h2 className="title">Video Calling App</h2>
          <p className="text">3  open tasks, 3 tasks completed</p>
          <p className="text">Lorem ipsum is simply dummy text of the printing and typesetting insdustry. When an unknown printer. </p>
          <br />
          <h3 className="subtitle">Deadline:</h3>
          <br /><br />
          <p className="text">17 Apr 2023</p>
          <br />
          <h2 className="title">Project Leader:</h2>
          <br />
          <div className="avatar">
            <img src={Image} alt="Foto del líder del proyecto" />
          </div>
          <br />
          <p className="title">Team</p>
          <br />

          <div className="team-photos">
            <div className="avatar">
              <img src={Image1} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image2} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image3} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image4} alt="Foto del miembro del equipo" />
            </div>
            <div className="team-size">
              <div className="indicator">4</div>
            </div>
          </div>

          <br />
          <div className="progress-container">
            <p className="title">Progress <span className="percentage" style={{ color: 'green' }}>{progress}%</span></p>
            <div className="progress-bar" onMouseDown={handleMouseDown}>
              <div className="progress" style={{ width: `${progress}%` }}></div>
              <div className="progress-indicator" style={{ left: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        {/* contenedor 4*/}
        <div className="container">
          <h2 className="title">Hospital Administration</h2>
          <p className="text">3  open tasks, 3 tasks completed</p>
          <p className="text">Lorem ipsum is simply dummy text of the printing and typesetting insdustry. When an unknown printer.</p>
          <br />
          <h3 className="subtitle">Deadline:</h3>
          <br /><br />
          <p className="text">17 Apr 2023</p>
          <br />
          <h2 className="title">Project Leader:</h2>
          <br />
          <div className="avatar">
            <img src={Image} alt="Foto del líder del proyecto" />
          </div>
          <br />
          <p className="title">Team</p>
          <br />

          <div className="team-photos">
            <div className="avatar">
              <img src={Image1} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image2} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image3} alt="Foto del miembro del equipo" />
            </div>
            <div className="avatar">
              <img src={Image4} alt="Foto del miembro del equipo" />
            </div>
            <div className="team-size">
              <div className="indicator">4</div>
            </div>
          </div>

          <br />
          <div className="progress-container">
            <p className="title">Progress <span className="percentage" style={{ color: 'green' }}>{progress}%</span></p>
            <div className="progress-bar" onMouseDown={handleMouseDown}>
              <div className="progress" style={{ width: `${progress}%` }}></div>
              <div className="progress-indicator" style={{ left: `${progress}%` }}></div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProjectPage;