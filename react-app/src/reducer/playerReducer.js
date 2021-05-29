import { FETCH_PLAYERS, UPDATE_PLAYERS } from "../action/type";

const initialState = {
  team: [],
};

export default function (state = { initialState }, action) {
  switch (action.type) {
    case FETCH_PLAYERS:
      // console.log(action.payload)
      return { ...state, player: action.payload };
    case UPDATE_PLAYERS:
      // console.log(action.payload)
      return { ...state, player: action.payload };
    default:
      return state;
  }
}