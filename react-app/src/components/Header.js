import React, { useState, useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Modal from "@netojose/react-modal";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const [term, setTerm] = useState("");
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
          <Link to="/">Teams</Link>
          </Button>
          <Button color="inherit">
          <Link to="/players">Players</Link></Button>
        <Button onClick={openModal}>Add Team</Button>
        <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <input
                className="main-input-style"
                type="text"
                value={term}
                onChange={(event)=>setTerm(event.target.value)}
                placeholder={`Enter Team Name`}
            /><br/>
          <Button onClick={closeModal}>closeModal</Button>
        </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}
