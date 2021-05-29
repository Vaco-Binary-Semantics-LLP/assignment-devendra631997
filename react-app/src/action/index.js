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
            var manupulate = []
            const p = response.data;
            // p.map(ele=>
            //   ele.player(element=>{
            //     manupulate.push({
            //       "team":ele,
            //       "player":element
            //     })
            //   })
            // )

            // console.log(p)
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

export function updatePlayers() {
    return function (dispatch) {
      try {
        axios
          .get(`${server}/player`)
          .then((response) => {
            const player = response.data.data.signals;
            // console.log(status);
            dispatch({
              type: UPDATE_PLAYERS,
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
  