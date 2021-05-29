import React, { useEffect } from "react";
import { fetchTeam } from "../action/index";
import { connect } from "react-redux";
const Team = (props) => {

  useEffect(() => {
    props.fetchTeam();
  }, []);
 const handleDelete=(id)=>{
   console.log(id);
 }
  return (
    <div>
      {/* {
        console.log(props.t.team)
      }
      {props.t.team.map(ele=>{
        return(
          <div id={ele._id}>
            <p>{ele.title} <button onClick={handleDelete(ele._id)}>Delete</button></p>
            
          </div>
        )
      })} */}
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state)
  return {
    t: state.team,
  };
}

export default connect(mapStateToProps, { fetchTeam })(Team);
