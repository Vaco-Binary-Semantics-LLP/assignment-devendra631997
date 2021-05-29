import { FETCH_TEAM, UPDATE_TEAM } from "../action/type";

const initialState = {
  team: [],
};

export default function (state = { initialState }, action) {
  switch (action.type) {
    case FETCH_TEAM:
      // console.log(action.payload)
      return { ...state, team: action.payload };
    case UPDATE_TEAM:
      // console.log(action.payload)
      return { ...state, team: action.payload };
    default:
      return state;
  }
}