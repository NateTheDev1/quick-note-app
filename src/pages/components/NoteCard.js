import React from "react";
import { Fab, Card, Grid, CardContent } from "@material-ui/core";
import shortenText from "../../helpers/shortenText";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";

const NoteCard = ({ classes, n, handleView }) => {
  return (
    <Grid item xs={12} md={6} lg={4} className={classes.item} key={n._id}>
      <Card className={classes.card}>
        <CardContent>
          <h2
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginBottom: "2%",
            }}
          >
            {n.title}
          </h2>
          <h2 style={{ color: "gray", fontSize: "1rem" }}>{n.createdAt}</h2>
          <p
            style={{
              fontSize: "0.9rem",
              marginTop: "5%",
              color: "white",
            }}
          >
            {shortenText(`${n.content}`)}
          </p>
          <Fab
            variant="extended"
            size="medium"
            aria-label="View"
            style={{ marginTop: "5%" }}
            onClick={() => {
              handleView(n);
              console.log("Clicked");
            }}
          >
            <VisibilityOutlinedIcon style={{ marginRight: "10%" }} />
            View
          </Fab>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NoteCard;
