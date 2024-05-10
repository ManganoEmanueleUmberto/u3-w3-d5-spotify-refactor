import { GET_MUSIC_HIP_POP, GET_MUSIC_POP, GET_MUSIC_ROCK, LIKED, TRACK } from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hipPop: [],
  singleTrack: [],
  liked: [],
};

const MainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MUSIC_ROCK:
      return {
        ...state,
        rock: action.payload,
      };
    case GET_MUSIC_POP:
      return {
        ...state,
        pop: action.payload,
      };
    case GET_MUSIC_HIP_POP:
      return {
        ...state,
        hipPop: action.payload,
      };
    case "GET_SINGLE_TRACK":
      return {
        ...state,
        singleTrack: action.payload,
      };
    case TRACK:
      return {
        ...state,
        singleTrack: action.payload,
      };
    case LIKED:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export default MainPageReducer;
