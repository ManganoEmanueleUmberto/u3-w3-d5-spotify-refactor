import { Alert, Col, Row } from "react-bootstrap";
import { getMusicHipPop, getMusicPop, getMusicRock } from "../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongCard from "./SongCard";

const MainSection = () => {
  const dispatch = useDispatch();
  const musicRock = useSelector((state) => state.mainPage.rock);
  const musicPop = useSelector((state) => state.mainPage.pop);
  const musicHipPop = useSelector((state) => state.mainPage.hipPop);
  useEffect(() => {
    dispatch(getMusicRock());
    dispatch(getMusicPop());
    dispatch(getMusicHipPop());
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <a href="#e">TRENDING</a>
          <a href="#e">PODCAST</a>
          <a href="#e">MOODS AND GENRES</a>
          <a href="#e">NEW RELEASES</a>
          <a href="#e">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
              {musicRock ? (
                musicRock.map((song, i) => (i < 4 ? <SongCard data={song} /> : <></>))
              ) : (
                <Alert variant="danger">Errore nel caricamento delle canzoni</Alert>
              )}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
              {musicPop ? (
                musicPop.map((song, i) => (i < 4 ? <SongCard data={song} /> : <></>))
              ) : (
                <Alert variant="danger">Errore nel caricamento delle canzoni</Alert>
              )}
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
              {musicHipPop ? (
                musicHipPop.map((song, i) => (i < 4 ? <SongCard data={song} /> : <></>))
              ) : (
                <Alert variant="danger">Errore nel caricamento delle canzoni</Alert>
              )}
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default MainSection;
