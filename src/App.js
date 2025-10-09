import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  // Estado que guarda qual skill está com hover (null = nenhuma)
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Estado para controlar visibilidade do header baseado no scroll
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Se scrollou para baixo e passou de 100px, esconde o header
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      }
      // Se scrollou para cima, mostra o header
      else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="App">
      <header
        className={`App-header ${showHeader ? 'header-visible' : 'header-hidden'}`}
      >
        <div className="NameContainer">
          <p className="pHeader">Hello World!</p>
          <p className="HeaderPresentation">Eu me chamo </p>
          <h1 className="NameH">Kauã</h1>
        </div>
      </header>

      <main>
        <div className="Divider" data-aos="fade-up" />

        <div className="skillsContainer">
          <div className="skills">
            <h1 data-aos="fade-down">Competencias</h1>

            {/* HTML5 - Container com position relative */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('html')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/html.png"
                alt="HTML5"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              {hoveredSkill === 'html' && (
                <div className="modalSkill">
                  <h3>HTML5</h3>
                  <p>
                    Conhecimento em estruturação semântica e criação de layouts,
                    desenvolvido através de projetos pessoais
                  </p>
                </div>
              )}
            </div>

            {/* CSS3 */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('css')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/css-3.png"
                alt="CSS3"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="200"
              />
              {hoveredSkill === 'css' && (
                <div className="modalSkill">
                  <h3>CSS3</h3>
                  <p>
                    Experiência em layouts responsivos, flexbox, grid e
                    animações através de projetos práticos
                  </p>
                </div>
              )}
            </div>

            {/* React */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('react')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/ReactJs.webp"
                alt="Reacticon"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              {hoveredSkill === 'react' && (
                <div className="modalSkill">
                  <h3>React</h3>
                  <p>
                    Conhecimento em componentes, hooks básicos (useState,
                    useEffect) e props, aplicado em projetos web
                  </p>
                </div>
              )}
            </div>

            {/* JavaScript */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('javascript')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/script-java.png"
                alt="JavaScript"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="400"
              />
              {hoveredSkill === 'javascript' && (
                <div className="modalSkill">
                  <h3>JavaScript</h3>
                  <p>
                    Conhecimento em ES6+, funções assíncronas, manipulação do
                    DOM e consumo de APIs REST
                  </p>
                </div>
              )}
            </div>

            {/* React Native */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('reactnative')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/ReactNative.png"
                alt="ReactNative"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="500"
              />
              {hoveredSkill === 'reactnative' && (
                <div className="modalSkill">
                  <h3>React Native</h3>
                  <p>
                    Experiência profissional em desenvolvimento mobile,
                    incluindo navegação, integração com APIs e componentes
                    nativos
                  </p>
                </div>
              )}
            </div>

            {/* GitHub */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('github')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/github.png"
                alt="Git"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="600"
              />
              {hoveredSkill === 'github' && (
                <div className="modalSkill">
                  <h3>GitHub</h3>
                  <p>
                    Conhecimento em versionamento de código, criação de
                    repositórios e trabalho com pull requests
                  </p>
                </div>
              )}
            </div>

            {/* Git */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('git')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/GitIcon.png"
                alt="GitIcon"
                className="skillsIcon"
                data-aos="zoom-in"
                data-aos-delay="700"
              />
              {hoveredSkill === 'git' && (
                <div className="modalSkill">
                  <h3>Git</h3>
                  <p>
                    Conhecimento em comandos básicos, criação de branches,
                    commits e resolução de conflitos simples
                  </p>
                </div>
              )}
            </div>

            {/* TypeScript */}
            <div className="skill-wrapper">
              <img
                onMouseEnter={() => setHoveredSkill('typescript')}
                onMouseLeave={() => setHoveredSkill(null)}
                src="/imgs/TypeScript.png"
                alt="TypeScript"
                className="TpSc"
                data-aos="zoom-in"
                data-aos-delay="800"
              />
              {hoveredSkill === 'typescript' && (
                <div className="modalSkill">
                  <h3>TypeScript</h3>
                  <p>
                    Conhecimento básico em tipagem de variáveis, interfaces e
                    types para projetos JavaScript
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="Divider2" />
      </main>

      <footer>
        <div className="ContainerFooter">
          <div className="FooterContent">
            <p className="FooterText">
              Este portfólio foi desenvolvido para fins de estudo e apresentação
              profissional, com o objetivo de divulgar minhas experiências e
              habilidades na área de desenvolvimento.
            </p>
            <div className="SocialLinks">
              <a
                href="https://github.com/KauarRl"
                target="_blank"
                rel="noopener noreferrer"
                className="SocialIcon"
              >
                <img src="/imgs/github.png" alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/kauã-richard-lacerda-soares-6a102a263"
                target="_blank"
                rel="noopener noreferrer"
                className="SocialIcon"
              >
                <img src="/imgs/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
            <p className="Copyright">Feito por Kauã &copy; 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
