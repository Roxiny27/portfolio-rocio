import React from "react";
import { Container, Navbar, Nav, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import RocioImg from "./img/Rocio.jpg";
import InicioImg from "./img/inicio.jpg"; 
import SobreMiImg from "./img/sobremi.png";
import HabilidadesImg from "./img/habilidadestecnicas.png";
import ProyectosImg from "./img/proyecto.jpg";
import ExperienciaImg from "./img/experiencia.jpg";
import ContactoImg from "./img/contacto.jpg";
import "./style.scss";
import { Tabs, Tab } from "react-bootstrap";

function App() {
  const [key, setKey] = React.useState("home"); 
  const tabs = [
    { key: "home", label: "Inicio" },
    { key: "about", label: "Sobre mí" },
    { key: "skills", label: "Habilidades Técnicas" },
    { key: "projects", label: "Proyectos" },
    { key: "experience", label: "Experiencia" },
    { key: "services", label: "Servicios" },
   
  ];
  const playlists = [
    { id: "home", label: "Inicio", img: InicioImg},
    { id: "about", label: "Sobre mí", img: SobreMiImg },
    {id: "experience", label: "Educación y Experiencia", img: ExperienciaImg},
    { id: "skills", label: "Habilidades Técnicas", img: HabilidadesImg },
    { id:"projects", label: "Proyectos", img: ProyectosImg },
    

  ];

  return (
    <>
      <Navbar expand="lg" className="shadow-sm custom-navbar" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="brand-title text-shadow-drop-tl">
            Rocío Patiño Gómez
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Container className="mt-4">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          id="controlled-tab-example"
          className="mb-3"
          justify
        >
          <Tab eventKey="home" title="Inicio">
            <section id="home" className="centered-section">
              <img
                src={RocioImg}
                alt="Rocío Patiño Gómez"
                className="square-image scale-in-center mb-3"
                width="400"
                height="400"
              />
              <div className="profile-info">
                <h2 className="song-title">Desarrolladora Web Junior</h2>
                <p className="artist-name">HTML | CSS | JavaScript | React | Angular | Node.js | Java | SQL | MySQL | noSQL | PHP | Symfony | Apache | Tomcat | </p>
              </div>
              <div className="fake-progress"></div>
              <div className="music-controls mt-3">
                <Button
                  variant="outline-secondary"
                  className="control-btn"
                  href="/rocio.pdf"
                  download
                  aria-label="Descargar CV"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-file-earmark-arrow-down-fill"></i>
                </Button>
                <Button
                  variant="outline-dark"
                  className="control-btn mx-3"
                  href="https://github.com/Roxiny27"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </Button>
                <Button
                  variant="outline-info"
                  className="control-btn"
                  href="https://www.linkedin.com/in/rocio-pati%C3%B1o-g%C3%B3mez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </Button>
              </div>
            </section>
          </Tab>

          <Tab eventKey="about" title="Sobre mí">
            <section id="about" className="centered-section">
              <h3>¡Hola, bienvenid@ a mi web!🐶💻</h3>
              <p>Soy Rocío y vivo a medio camino entre el mundo digital y el mundo animal.


Por las mañanas puedo estar picando código, diseñando webs y haciendo que todo funcione bonito y rápido… y por las tardes quizá me veas enseñando a un perro a sentarse (o al menos intentándolo con dignidad). Soy desarrolladora web junior, adiestradora canina y ATV (Auxiliar Técnico Veterinario). Sí, un perfil poco común… ¡pero 100% real!

La programación me atrapó desde que era adolescente. Me encantaba crear cosillas con HTML por pura curiosidad, aunque durante años no me atreví a lanzarme del todo. El miedo, ya sabes. Pero hace poco decidí dejarlo atrás y formarme en serio: estudié Desarrollo de Aplicaciones Web en Universae, y desde entonces no he parado.

Ahora quiero dedicarme al desarrollo web con todas las ganas del mundo. Me encanta aprender, resolver problemas y darle forma digital a ideas que antes solo estaban en la cabeza.

¿Buscas una web chula y funcional, hecha por alguien que entiende tanto de UX como de colas que se mueven de felicidad? Pues quizás tenemos algo que hablar!</p>
            </section>
          </Tab>

          <Tab eventKey="experience" title="Experiencia">
            <section id="experience" className="centered-section">
              <h2>Educación y experiencia</h2>
              <h4>Educación</h4>
              <ul>
                <li><strong>Universae</strong> – Grado Superior en DAW (2023 – 2025)</li>
                <li><strong>Narub</strong>- Cestificado profesional Adiestramiento de base y modificación de conducta</li>
                <li><strong>Cruz Roja</strong> – Auxiliar Administrativo (Mar 2014 – Jun 2014)</li>
              </ul>
              <h4>Experiencia</h4>
              <ul>
                <li><strong>Higher Education Software</strong> – Prácticas en Desarrollo Aplicaciones Web (Feb 2025 - May 2025)</li>
                <li><strong>Security Dog</strong> – Auxiliar de Servicios (Jun 2024 – Actualidad)</li>
                <li><strong>Veterinaria Molino de la Hoz</strong> – Peluquera canina y Auxiliar Técnico Veterinario (Mayo 2019 – Noviembre 2023)</li>
                <li><strong>Adiestramiento canino</strong> – adiestradora canina (Febrero 2018 – Actualmente)</li>
              </ul>
              <h4>Certificados u otra formación</h4>
              <ul>
                <li><strong>Coursera</strong> – Introduction to Front-End Development de Meta</li>
                <li><strong>Coursera</strong> – React avanzado de Meta</li>
                <li><strong>Udemy </strong> – Especialización en React y Angulas de Víctor Robles</li>
                <li><strong>Escuela de idiomas</strong> – Estudiando para el nivel B2</li>
              </ul>
            </section>
          </Tab>
          <Tab eventKey="skills" title="Habilidades Técnicas">
          <section id="skills" className="centered-section">
            <h2>Habilidades Técnicas</h2>
             <p>
              <strong>Frontend:</strong> HTML5, CSS3, JavaScript, React.js, React Native, Angular, Bootstrap, SPA, Responsive Design, Accesibilidad Web.<br/><br/>
              <strong>Backend:</strong> PHP, Java, Symfony, Node.js (básico).<br/><br/>
              <strong>Bases de datos:</strong> SQL, MySQL, NoSQL, MongoDB, MariaDB.<br/><br/>
              <strong>Herramientas:</strong> Git, GitHub, Visual Studio Code, IntelliJ IDEA, Eclipse, XAMPP, Apache, Figma.<br/><br/>
              <strong>Metodologías:</strong> Scrum, trabajo ágil y colaborativo.
             </p>
          </section>

          </Tab>

          <Tab eventKey="projects" title="Proyectos">
            <section id="projects" className="centered-section">
              <h2>Proyectos</h2>
              <p>En esta sección os pongo el link de Github donde subo todos mis proyectos que pueden ser visibles.
              </p>
              <ul>
                <li>
                  <a href="https://github.com/Roxiny27" target="_blank" rel="noreferrer">Ver proyectos en GitHub</a>
                </li>
              </ul>
            </section>
          </Tab>


          
        </Tabs>

     
        <div className="playlist-grid mt-5">
          {playlists.map((item) => (
            <div
              key={item.id}
              className="playlist-card"
              onClick={() => setKey(item.id)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.img} alt={item.label} className="playlist-image" />
              <div className="playlist-title">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default App;
