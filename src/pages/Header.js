import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../images/Logo.svg";
import PersonWithNotes from "../images/PersonWithNotes.svg";

const useStyles = makeStyles({
  landingContainer: {
    minHeight: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "#36393F",

    "& h1": {
      color: "#00BFA6",
      fontWeight: 700,
      fontSize: "3rem",
    },

    "& footer": {
      marginTop: "3%",
      justifySelf: "flex-end",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      height: "50px",
      color: "white",
      textAlign: "center",
      background: "#00BFA6",

      "& a": {
        color: "white",
      },

      "@media (max-width: 800px)": {
        flexDirection: "column",
      },
    },
  },

  landingContent: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    "& img": {
      width: "40%",
    },

    "@media (max-width: 800px)": {
      border: "1px solid red",
      flexDirection: "column-reverse",
      textAlign: "center",
      "& img": {
        marginTop: "5%",
        marginBottom: "5%",
      },
    },
  },
  contentLeft: {
    display: "flex",
    flexDirection: "column",
    width: "40%",

    "& p": {
      fontSize: "1.2rem",
      color: "white",
      lineHeight: 2,
      marginTop: "5%",
      marginBottom: "5%",
    },

    "@media (max-width: 800px)": {
      width: "100%",
    },
  },
  navLinks: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    "& a": {
      width: "200px",
      marginRight: "5%",
      marginBottom: "4%",

      "@media (max-width: 800px)": {
        margin: "0 auto",
      },
    },

    "& button": {
      width: "100%",
      border: "1px solid white",
      background: "none",
      color: "white",
      height: "50px",
      transition: "ease-in 0.2s",

      "&:hover": {
        cursor: "pointer",
        background: "#00BFA6",
        border: "none",
        width: "150%",
      },
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
          <div className={classes.navLinks}>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
        <img src={PersonWithNotes} alt="Person taking notes" />
      </div>
      <footer>
        <p>Nathaniel Richards 2020</p>
        <a href="https://nathanielrichards.dev" target="_none">
          https://nathanielrichards.dev
        </a>
      </footer>
    </div>
  );
};

export default Header;
