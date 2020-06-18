import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { makeStyles, Grid, Paper, Card, CardContent, Typography, CardActions, Button, Fab, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import {axiosWithAuth} from '../helpers/axiosWithAuth'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import NewNote from './NewNote';
import {addNote} from '../actions/noteActions'
import shortenText from '../helpers/shortenText'

const useStyles = makeStyles({
    noteList: {
        width: '75%',
        marginBottom: '5%',
        justifyContent: 'space-around',
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
    const [newOpen, setNewOpen] = useState(false)
    const [formValues, setFormValues] = useState({
        title: '',
        content: ''
    })

    useEffect(() => {
        axiosWithAuth().get('https://quick-note-api.herokuapp.com/api/notes').then(res => {
            setNotes(res.data)
        }).catch(err => console.log(err))
    }, [])

    const classes = useStyles()


    const handleNew = e => {
        setNewOpen(!newOpen)
    }

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await props.addNote(formValues)
        if(res === 'Ok') {
            setFormValues({
                title: '',
                content: ''
            })
        setNewOpen(!newOpen)
        }
        
    }

    // if(props.user === null) {
    //     return <h1>Loading User Data.</h1>
    // }


    return (
        <div className={classes.noteList}>
                            <>
                <Dialog open={newOpen} onClose={handleNew} aria-labelledby='New Note'>
                    <DialogTitle>New Note</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Put your ideas down! Begin by adding a meaningful title and some content.</DialogContentText>
                        <NewNote formValues={formValues} handleChange={handleChange}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleNew}>
                            Cancel
                        </Button>
                        <Button onClick={handleSubmit}>
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
                {notes.length === 0 &&                 <h2 style={{color: 'white', fontSize: '1.2rem', fontWeight: 400, marginBottom: '2%'}}>You don't have any notes yet, make some!</h2>
}
                <Link onClick={handleNew} to='#'>
                <Card className={classes.card} style={{textAlign: 'center', width: '50%', marginBottom: '5%'}} className={classes.new}>
                        <CardContent>
                            <AddIcon style={{color: 'white'}}/>
                        </CardContent>
                </Card>
                </Link>
                </>
            {notes.length === 0 ? null : (
                <Grid container spacing={3}>
                
                    {notes.map(n => (
                        <Grid item xs={4} className={classes.item}>
                        <Card className={classes.card}>
                        <CardContent>
                    <h2 style={{color: 'white', fontSize: '1.5rem', marginBottom: '2%'}}>{n.title}</h2>
                    <h2 style={{color: 'gray', fontSize: '1rem',}}>{n.createdAt}</h2>
                            <p style={{fontSize: '0.9rem', marginTop: '5%', color: 'white'}}>{shortenText(`${n.content}`)}</p>
                        </CardContent>
                        <CardActions>
                            <IconButton aria-label='Edit'>
                                <VisibilityOutlinedIcon style={{color: 'white'}}/> 
                            </IconButton>
                        </CardActions>
                    </Card>
                    </Grid>
                    ))}
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

export default connect(mapStateToProps, {addNote})(NoteList)