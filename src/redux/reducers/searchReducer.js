import { SEARCH } from "../actions";

const initialState = {
  content: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default searchReducer;
