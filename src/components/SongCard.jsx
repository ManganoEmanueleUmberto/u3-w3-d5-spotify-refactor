import { Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { storeTrack } from "../redux/actions";
export let canRender = false;

const SongCard = (singleSong) => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.mainPage.liked);

  const handleClick = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/track/" + singleSong.data.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((song) => {
        dispatch(storeTrack(song));
        canRender = true;
      });
  };
  return (
    <Col className="text-center" onClick={handleClick} key={singleSong.data.id}>
      <Image className="img-fluid" src={singleSong.data.album.cover_medium} alt="track" />
      <p>
        Track: {singleSong.data.title} <br></br> Artist: {singleSong.data.artist.name}
      </p>
    </Col>
  );
};

export default SongCard;
