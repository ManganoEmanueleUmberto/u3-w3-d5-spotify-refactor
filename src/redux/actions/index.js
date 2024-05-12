export const GET_MUSIC_ROCK = "GET_MUSIC_ROCK";
export const GET_MUSIC_POP = "GET_MUSIC_POP";
export const GET_MUSIC_HIP_POP = "GET_MUSIC_HIP_POP";
export const TRACK = "TRACK";
export const SEARCH = "SEARCH";
export const LIKED = "LIKED";
export const NOT_LIKED = "NOT_LIKED";

export const storeTrack = (data) => {
  return {
    type: TRACK,
    payload: data,
  };
};
export const search = (data) => {
  return {
    type: SEARCH,
    payload: data,
  };
};
export const isLiked = (data) => {
  return {
    type: LIKED,
    payload: data,
  };
};
export const isNotLiked = (data) => {
  return {
    type: NOT_LIKED,
    payload: data,
  };
};

export const getMusicRock = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen");
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_MUSIC_ROCK, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export const getMusicPop = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=katyperry");
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_MUSIC_POP, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
export const getMusicHipPop = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem");
      if (response.ok) {
        let { data } = await response.json();
        dispatch({ type: GET_MUSIC_HIP_POP, payload: data });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
