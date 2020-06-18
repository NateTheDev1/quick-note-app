import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { makeStyles, Grid, Paper, Card, CardContent, Typography, CardActions, Button, Fab, IconButton } from '@material-ui/core'
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    noteList: {
        width: '75%',
        justifyContent: 'space-around',
        overflow: 'hidden'
    },
    item: {
        height: '325px'
    },
    card: {
        backgroundColor: 'rgba(255,255,255, 0.7)',
        height: '100%',
    },
    new: {

        transition: 'ease 0.5s',

        '&:hover': {
            backgroundColor: 'gray !important',
            color: 'black'
        }
    }
})

const NoteList = (props) => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        axiosWithAuth().get('https://quick-note-api.herokuapp.com/api/user/notes').then(res => {
            setNotes(res.data)
        }).catch(err => console.log(err))
    }, [])

    const classes = useStyles()

    // if(props.user === null) {
    //     return <h1>Loading User Data.</h1>
    // }

    return (
        <div className={classes.noteList}>
            {notes.length === 0 ? (
                <>
                <h2 style={{color: 'white', fontSize: '1.2rem', fontWeight: 400, marginBottom: '2%'}}>You don't have any notes yet, make some!</h2>
                <Link to='/notes/new'>
                <Card className={classes.card} style={{textAlign: 'center', width: '50%'}} className={classes.new}>
                        <CardContent>
                            <AddIcon style={{color: 'white'}}/>
                        </CardContent>
                </Card>
                </Link>
                </>
            ) : (
                <Grid container spacing={3}>
                <Grid item xs={4} className={classes.item}>
                    <Card className={classes.card}>
                        <CardContent>
                        <h2 style={{color: 'white', fontSize: '1.5rem', marginBottom: '2%'}}>NOTE TITLE</h2>
                            <h2 style={{color: 'gray', fontSize: '1rem',}}>6/18/2020</h2>
                            <p style={{fontSize: '0.9rem', marginTop: '5%', color: 'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label='Edit'>
                                <VisibilityOutlinedIcon style={{color: 'white'}}/> 
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authReducer.user,
        token: state.authReducer.token
    }
  }

export default connect(mapStateToProps, null)(NoteList)