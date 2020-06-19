import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Logo from "../images/Logo.svg";
import { makeStyles, AppBar, Toolbar, Button } from "@material-ui/core";
import NoteList from "./NoteList";
import { logout } from "../actions/authActions";

//    background: "rgba(255,255,255, 0.7)",

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    margin: "0 auto",
    background: "#36393F",
    color: "white",

    "& h2": {
      color: "#00BFA6",
      fontWeight: 600,
      fontSize: "1.3rem",
    },

    "& .MuiButton-label": {
      color: "#00BFA6",
      fontWeight: 500,
      fontSize: "1rem",
      fontFamily: "Poppins, sans-serif",
    },

    "& .MuiPaper-root": {
      background: "#202226",
    },

    "& .MuiButton-root": {
      transition: "ease 0.5s",
      width: "10%",
    },

    "& .MuiButton-root:hover": {
      border: "1px solid white",
      width: "15%",
    },
  },
  content: {
    paddingLeft: "3%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& img": {
      width: "15%",

      "@media(max-width: 850px)": {
        width: "30%",
      },
    },
  },
  welcome: {
    marginTop: "3%",
    flexDirection: "column",
    display: "flex",

    "& h1": {
      fontSize: "3rem",
      fontWeight: 500,
      marginBottom: "1.5%",
      "@media(max-width: 850px)": {
        fontSize: "2.3rem",
        marginBottom: "3%",
      },
    },

    "& p": {
      fontSize: "1.2rem",
      color: "#00BFA6",
      "@media(max-width: 850px)": {
        padding: "1.25%",
        marginBottom: "5%",
      },
    },

    "& hr": {
      minWidth: "800px",
      maxWidth: "75%",
      margin: 0,
      marginTop: "1%",
      marginBottom: "3%",
      "@media(max-width: 850px)": {
        display: "none",
      },
    },
  },
});

const NoteHome = (props) => {
  const history = useHistory();
  const classes = useStyles();

  if (props.auth === false) {
    history.push("/login");
  }

  const handleLogout = (e) => {
    const res = props.logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={3}>
        <Toolbar className={classes.header}>
          <img src={Logo} alt="Quick Notes" />
          <Button onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      {props.user !== null && (
        <div className={classes.content}>
          <div className={classes.welcome}>
            <h1>Hello {props.user.name}, here are your notes</h1>
            <p>
              Here you can create, edit, and update notes on your QuickNote
              Dashboard.
            </p>
            <hr />
            <NoteList />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer.auth,
    user: state.authReducer.user,
  };
};

export default connect(mapStateToProps, { logout })(NoteHome);
