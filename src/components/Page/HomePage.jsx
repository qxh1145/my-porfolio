import Background from "./Background";
import Foreground from "./Foreground";
import { useState, useEffect } from "react";
import Name from "./Name";
import Navspace from "./Navspace";
import usePageStore from "../../store/pageStore"; 

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from "./content/Home";
import Project from "./content/Project";
import Info from "./content/Info";
import Skill from "./content/Skill";
import ToggleDarkmode from "./content/ToggleDarkmode";
import '../Style/Theme.css';
const HomePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [isFading, setIsFading] = useState(false);

  const { page } = usePageStore();
  let content = null;
  if (page == 1) {
    content = <Home />
  } else if (page == 2) {
    content = <Project />
  } else if (page == 3) {
    content = <Info />
  } else {
    content = <Skill />
  }

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    const unmountTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []); 

  if (showWelcome) {
    return (
      <div className={`welcome-screen ${isFading ? 'fading-out' : ''}`}>
        <h1>{"<>"}Tran Anh Quan <span style={{color: "red"}}>Portfolio</span>{"</>"}</h1>
      </div>
    );
  }

  return (
    <>
      <div
        className="fade-in-rotate"
        style={{
          position: "fixed",
          bottom: "7rem",
          left: "0.1rem",
          zIndex: 10,
        }}
      >
        <ToggleDarkmode />
      </div>

      <Background />
      <Foreground>
        <Row>
          <Row className="fade-in-up">
            <Name />
          </Row>
          <Row
            className="mt-5 fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <Navspace />
          </Row>
        </Row>
        <Row
          key={page}
          className="mt-5 fade-in-up" >
          {content}
        </Row>
      </Foreground>
    </>
  );
};
export default HomePage;
