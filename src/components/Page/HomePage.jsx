import Background from "./Background";
import Foreground from "./Foreground";
import Name from "./Name";
import Navspace from "./Navspace";
import usePageStore from "../../store/pageStore"; // Import the store

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Scroll from "./content/Scroll";
import Home from "./content/Home";
import Project from "./content/Project";
import Info from "./content/Info";
import Skill from "./content/Skill";
import ToggleDarkmode from "./content/ToggleDarkmode";
import "../Style/Theme.css";
const HomePage = () => {
  const { page } = usePageStore(); // Use the store
  let content = null;
  if (page == 1) {
    content = <Home />;
  } else if (page == 2) {
    content = <Project />;
  } else if (page == 3) {
    content = <Info />;
  } else {
    content = <Skill />;
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: "10%",
          left: "-2vh",
          transform: "rotate(270deg)",
          zIndex: 10,
        }}
      >
        <ToggleDarkmode />
      </div>

      <Background />
      <Foreground>
        <Row>
          <Row>
            <Name />
          </Row>
          <Row className="mt-5">
            <Navspace />
          </Row>
        </Row>
        <Row className="mt-5">
          <Scroll />
        </Row>

        <Row className="mt-5">{content}</Row>
      </Foreground>
    </>
  );
};
export default HomePage;
