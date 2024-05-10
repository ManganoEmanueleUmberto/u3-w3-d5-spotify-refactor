import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { canRender } from "./SongCard";

const Player = () => {
  const song = useSelector((state) => state.mainPage.singleTrack);
  const liked = useSelector((state) => state.mainPage.liked);
  console.log(liked);

  console.log(song);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100 ">
        <Col lg={{ span: 10, offset: 2 }} className="d-flex">
          {canRender ? (
            <Image src={song.album.cover_medium} alt="album cover" width={80} height={60} className="mt-2" />
          ) : (
            <></>
          )}

          {liked ? (
            <i class="bi bi-heart-fill text-secondary fs-5 ms-5 my-auto "></i>
          ) : (
            <i className="bi bi-heart text-secondary fs-5 ms-5 my-auto "></i>
          )}

          <Row className="w-100 h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls ">
              <h2 className="text-white fs-5 my-0 text-center">{song.title_short}</h2>
              <div className="d-flex">
                <NavLink href="#"></NavLink>
                <NavLink href="#">
                  <Image src="./assets/playerbuttons/shuffle.png" alt="shuffle" />
                </NavLink>
                <NavLink href="#">
                  <Image src="./assets/playerbuttons/prev.png" alt="prev" />
                </NavLink>
                <NavLink href="#">
                  <Image src="./assets/playerbuttons/play.png" alt="play" />
                </NavLink>
                <NavLink href="#">
                  <Image src="./assets/playerbuttons/next.png" alt="next" />
                </NavLink>
                <NavLink href="#">
                  <Image src="./assets/playerbuttons/repeat.png" alt="repeat" />
                </NavLink>
              </div>
              <div class="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
