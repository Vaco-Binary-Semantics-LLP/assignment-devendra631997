import axios from "axios";
import {
FETCH_PLAYERS,
UPDATE_PLAYERS,
FETCH_TEAM,
UPDATE_TEAM,
} from "./type";
var server = "http://localhost:8080/"


export function fetchPlayers() {
    return function (dispatch) {
      try {
        axios
        .get(`http://localhost:8080/team`)
          .then((response) => {
            const p = response.data;
            dispatch({
              type: FETCH_PLAYERS,
              payload: p,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
  }

export function deletePlayers(obj) {
    return function (dispatch) {
      try {
        axios
          .put(`http://localhost:8080/team`,obj)
          .then((response) => {
            const player = response.data;
            // console.log(status);
            dispatch({
              type: FETCH_TEAM,
              payload: player,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function addPlayers(obj) {
    return function (dispatch) {
      try {
        axios
          .put(`http://localhost:8080/team`,obj)
          .then((response) => {
            const player = response.data;
            // console.log(status);
            dispatch({
              type: FETCH_TEAM,
              payload: player,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function fetchTeam() {
    return function (dispatch) {
      try {
        axios
          .get(`http://localhost:8080/team`)
          .then((response) => {
            const team = response.data;
            // console.log("inreduced",team);
            dispatch({
              type: FETCH_TEAM,
              payload: team,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function addTeam(str) {
    return function (dispatch) {
      try {
        axios
          .post(`http://localhost:8080/team`,{data:{ title: str }})
          .then((response) => {
            const team = response.data;
            // console.log("inreduced",team);
            dispatch({
              type: FETCH_TEAM,
              payload: team,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
  }

  export function deleteTeam(id) {
    return function (dispatch) {
      try {
        axios
          .delete(`http://localhost:8080/team`,{data:{ "id": id }})
          .then((response) => {
            const team = response.data;
            // console.log("inreduced",team);
            dispatch({
              type: FETCH_TEAM,
              payload: team,
            });
          });
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export function updateTeam() {
      return function (dispatch) {
        try {
          axios
            .get(`${server}/team`)
            .then((response) => {
              const team = response.data.data.signals;
              // console.log(status);
              dispatch({
                type: UPDATE_TEAM,
                payload: team,
              });
            });
        } catch (error) {
          console.log(error);
        }
      };
    }
  