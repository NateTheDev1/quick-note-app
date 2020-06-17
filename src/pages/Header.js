import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../images/Logo.svg";
import PersonWithNotes from "../images/PersonWithNotes.svg";

const useStyles = makeStyles({
  landingContainer: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    background: "#36393F",

    padding: "20px 1.25%",

    "& img": {
      marginTop: "2%",
      marginBottom: "2%",
    },

    "& h1": {
      color: "#00BFA6",
      fontWeight: 600,
      fontSize: "3rem",
    },
  },
  landingContent: {
    marginTop: "3%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    "& img": {
      width: "40%",
    },
  },
  contentLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "40%",

    height: "50%",

    "& p": {
      fontSize: "1.2rem",
      color: "white",
      lineHeight: 2,
    },
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.landingContainer}>
      <img src={Logo} alt="Quick Notes" />
      <div className={classes.landingContent}>
        <div className={classes.contentLeft}>
          <h1>Take notes easily with QuickNote</h1>
          <p>
            QuickNote is a quick and easy solution to the many note taking
            applications you are currently signed up for. Here you just need to
            sign up, login and start creating simple notes to display on your
            board.
          </p>
        </div>
        <img src={PersonWithNotes} alt="Person taking notes" />
      </div>
    </div>
  );
};

export default Header;
