import { Col, Container, Image, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { canRender } from "./SongCard";
import { isLiked, isNotLiked } from "../redux/actions";

const Player = () => {
  const song = useSelector((state) => state.mainPage.singleTrack);
  const liked = useSelector((state) => state.mainPage.liked);
  let like = false;
  let index = 0;

  liked.map((songLike, i) => {
    console.log(songLike);
    if (songLike === song.title_short) {
      like = true;
      index = i;
    }
    return like;
  });

  const dispatch = useDispatch();

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100 ">
        <Col lg={{ span: 10, offset: 2 }} className="d-flex">
          {canRender ? (
            <Image src={song.album.cover_medium} alt="album cover" width={75} height={65} className="mt-2" />
          ) : (
            <></>
          )}

          {like ? (
            <i
              class="bi bi-heart-fill text-secondary fs-5 ms-5 my-auto "
              onClick={() => {
                dispatch(isNotLiked(index));
              }}
            ></i>
          ) : (
            <i
              className="bi bi-heart text-secondary fs-5 ms-5 my-auto "
              onClick={() => {
                dispatch(isLiked(song.title_short));
              }}
            ></i>
          )}

          <Row className="w-100 h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls me-5">
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
