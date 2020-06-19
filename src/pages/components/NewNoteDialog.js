import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import NewNote from "../NewNote";

const NewNoteDialog = ({
  newOpen,
  handleNew,
  formValues,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Dialog open={newOpen} onClose={handleNew} aria-labelledby="New Note">
      <DialogTitle>New Note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Put your ideas down! Begin by adding a meaningful title and some
          content.
        </DialogContentText>
        <NewNote formValues={formValues} handleChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNew}>Cancel</Button>
        <Button onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewNoteDialog;
