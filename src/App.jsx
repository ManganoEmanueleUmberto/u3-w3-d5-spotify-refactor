import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <MainSection />
        </Row>
      </Container>
      <Player />
    </>
  );
}

export default App;
