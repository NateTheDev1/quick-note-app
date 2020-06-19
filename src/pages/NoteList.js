import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Grid, Card, CardContent } from "@material-ui/core";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { Link, useHistory } from "react-router-dom";
import { addNote } from "../actions/noteActions";
import NewNoteDialog from "./components/NewNoteDialog";
import NoteCard from "./components/NoteCard";
import NewNoteButton from "./components/NewNoteButton";
import ViewNoteDialog from "./components/ViewNoteDialog";

const useStyles = makeStyles({
  noteList: {
    width: "90%",
    marginBottom: "5%",
    justifyContent: "space-around",
  },
  card: {
    backgroundColor: "rgba(255,255,255, 0.7)",
    height: "100%",
  },
  new: {
    transition: "ease 0.5s",
    textAlign: "center",
    width: "50%",
    marginBottom: "5%",
    "&:hover": {
      backgroundColor: "gray !important",
      color: "black",
    },

    "@media(max-width: 900px)": {
      width: "100%",
    },
  },
});

const NoteList = (props) => {
  const [notes, setNotes] = useState([]);
  const [newOpen, setNewOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [focusedNote, setFocusedNote] = useState(null);
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    axiosWithAuth()
      .get("https://quick-note-api.herokuapp.com/api/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchNewNotes = () => {
    axiosWithAuth()
      .get("https://quick-note-api.herokuapp.com/api/notes")
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  };

  const classes = useStyles();

  const handleNew = (e) => {
    setNewOpen(!newOpen);
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await props.addNote(formValues);
    if (res === "Ok") {
      setFormValues({
        title: "",
        content: "",
      });
      fetchNewNotes();
      setNewOpen(!newOpen);
    }
  };

  const handleFocus = (note) => {
    console.log(note);
    setFocusedNote(note);
    setViewOpen(true);
  };

  return (
    <div className={classes.noteList}>
      <>
        <ViewNoteDialog
          focusedNote={focusedNote}
          viewOpen={viewOpen}
          setViewOpen={setViewOpen}
        />
        <NewNoteDialog
          newOpen={newOpen}
          handleNew={handleNew}
          formValues={formValues}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {notes.length === 0 && (
          <h2
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: 400,
              marginBottom: "2%",
            }}
          >
            You don't have any notes yet, make some!
          </h2>
        )}
        <NewNoteButton classes={classes} handleNew={handleNew} />
      </>
      {notes.length === 0 ? null : (
        <Grid container spacing={3}>
          {notes.map((n) => (
            <NoteCard classes={classes} n={n} handleView={handleFocus} />
          ))}
        </Grid>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.token,
  };
};

export default connect(mapStateToProps, { addNote })(NoteList);
