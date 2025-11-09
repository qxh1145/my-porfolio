import Background from "./Background";
import Foreground from "./Foreground";
import { useState, useEffect } from "react";
import Name from "./Name";
import Navspace from "./Navspace";
import usePageStore from "../../store/pageStore"; // Import the store

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

  const { page } = usePageStore(); // Use the store
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
    // Bắt đầu quá trình mờ dần sau 1.5 giây
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1500);

    // Ẩn hoàn toàn component sau khi hiệu ứng mờ dần kết thúc (1.5s + 0.5s)
    const unmountTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    // Dọn dẹp timer khi component bị hủy
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần khi component được tạo

  if (showWelcome) {
    return (
      <div className={`welcome-screen ${isFading ? 'fading-out' : ''}`}>
        <div className="d-flex"><h1> {"<>"}Tran Anh Quan <span  style={{color: "red"}}>Porfolio</span>{"</>"}</h1>  </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="fade-in-rotate"
        style={{
          position: "fixed",
          bottom: "10%",
          left: "-2vh",
          zIndex: 10,
          animationDelay: '0.4s'
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
          key={page} /* Thêm key để kích hoạt lại animation */
          className="mt-5 fade-in-up" >
          {content}
        </Row>
      </Foreground>
    </>
  );
};
export default HomePage;
