import React, { useEffect ,useState, useCallback} from "react";
import { fetchTeam,deleteTeam,deletePlayers } from "../action/index";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Modal from "@netojose/react-modal";
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Team = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const [term, setTerm] = useState("");
  useEffect(() => {
    props.fetchTeam();
  }, []);

  const addPlayer = (id)=>{
    var mani = props.t.team.filter(ele=>ele._id==id)[0]
    var players = mani.player
          players.push(term)
    var obj = {
      "id":mani._id,
      "title":mani.title,
      "player":mani.player
  }
    console.log(obj)
    props.deletePlayers(obj)
    closeModal()
  }
  return (
    <div>
      <p style={{textAlign:"center",fontSize: "30px"}}>TEAMS</p>
      {props.t.team.map(ele=>{
        return(
          <div id={ele._id} style={{textAlign:"center",fontSize: "20px"}}>
            <Box style={{marginLeft:45}} width={0.9} bgcolor="grey.300" p={4} my={1}>
            <p>{ele.title}</p>
            <button style={{marginRight:50}} onClick={()=>props.deleteTeam(ele._id)}>Delete</button>
            <button onClick={openModal} >Add Player</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
              <input
                      className="main-input-style"
                      type="text"
                      value={term}
                      onChange={(event)=>setTerm(event.target.value)}
                      placeholder={`Enter Team Name`}
                  /><br/>
                <Button style={{marginLeft:50}} onClick={()=>addPlayer(ele._id)}><Link to="/">Add-player</Link></Button> <Button onClick={closeModal}>Cancel</Button>
              </Modal>
            
            </Box>
          </div>
        )
      })}
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state)
  return {
    t: state.team,
  };
}

export default connect(mapStateToProps, { fetchTeam,deleteTeam, deletePlayers })(Team);
