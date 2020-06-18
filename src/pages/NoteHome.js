import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Logo from "../images/Logo.svg";
import {makeStyles, AppBar, Toolbar, Button} from '@material-ui/core'

//    background: "rgba(255,255,255, 0.7)",

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        margin: "0 auto",
        background: "#36393F",
        color: 'white',

        '& h2': {
            color: '#00BFA6',
            fontWeight: 600,
            fontSize: '1.3rem',
        },

        '& .MuiButton-label': {
            color: '#00BFA6',
            fontWeight: 500,
            fontSize: "1rem",
            fontFamily: "Poppins, sans-serif",
        },

        '& .MuiPaper-root': {
            background: '#202226',
        },

        '& .MuiButton-root': {
            transition: 'ease 0.5s',
            width: '10%'
        },

        '& .MuiButton-root:hover': {
            border: '1px solid white',
            width: '15%'
        } 
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '& img': {
            width: '15%'
        }
    }
})

const NoteHome = (props) => {
    const history = useHistory()
    const classes = useStyles()

    if(props.auth === null) {
        history.push('/login')   
    }

    return (
        <div className={classes.root}>
            <AppBar position='static' elevation={3}>
                <Toolbar className={classes.header}>
                <img src={Logo} alt="Quick Notes" />
                <Button>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer.auth,
        user: state.authReducer.user
    }
  }

export default connect(mapStateToProps, {})(NoteHome)