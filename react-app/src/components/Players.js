import React, { useEffect, useState } from "react";
import { fetchTeam, fetchPlayers } from "../action/index";
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';

const Team = (props) => {
    const [term, setTerm] = useState("");
    const [data,setData] = useState(null)
    useEffect(() => {
        props.fetchTeam();
        props.fetchPlayers();
    }, []);

    const searchHandler = (event) => {
        setTerm(event.target.value);
        console.log(term)
        // const filterValue = filterSpecialCharacters(event.target.value);
        // getSearchData(filterValue);
    };

    function searchingFor(term){
        return function(x){
          return x.player.toLowerCase().includes(term.toLowerCase()) || !term ;
        }
      }

      const handledelete=(id,player)=>{
          console.log(id,player)
      }

    const settting = d=>{
        var ma = []
        d.map(ele=>{
            ele.player.map(element=>{
                // console.log(element)
                ma.push({
                    "id":ele._id,
                    "player":element,
                    "team":ele.title
                })
            })
        })
        return ma
    }
    return (
        <div>

            <input
            style={{margin:"10", width:"99%",alignContent:"center",alignSelf:"center"}}
                className="main-input-style"
                type="text"
                value={term}
                onChange={searchHandler}
                placeholder={`Search By Player Name `}
            />
                        {
            settting(props.TeamData.player).filter(searchingFor(term)).map(ele=>{
                return(
                    <div id={ele.id} style={{textAlign:"center"}}>
                        <Box width={1 / 4} bgcolor="grey.300" p={1} my={0.5}>
                        <p>Player Name : {ele.player}</p>
                        <p>Team Name : {ele.team}</p>
                        <button onClick={()=>{handledelete(ele.id,ele.player)}}>Delete</button>
                        </Box >
                    </div>
                )
            })
            }
        </div>
    );
};

function mapStateToProps(state) {
    // console.log("==============>",state)
    return {
        TeamData: state.player,
    };
}

export default connect(mapStateToProps, { fetchTeam, fetchPlayers })(Team);
