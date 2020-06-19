import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { Card, CardContent } from "@material-ui/core";

const NewNoteButton = ({ handleNew, classes }) => {
  return (
    <Link onClick={handleNew} to="#">
      <Card className={classes.card} className={classes.new}>
        <CardContent>
          <AddIcon style={{ color: "white" }} />
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewNoteButton;
