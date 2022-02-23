import React from "react";
import { Stack, Grid, Paper, Button, Typography } from "@mui/material";
const styles = {
  TypoGraphy: {
    width: "60%",
  },
  Box: {
    gap: 2,
  },
  Paper: {
    margin: "auto",
    padding: 4,
    display: "flex",
    alignItems: "center",
    marginTop: 2,
    justifyContent: "space-between",
    

  },
};
const ToDO = ({ title, handleDelete, index, handleCompleted, completed }) => {
  return (
    <Grid item xs={8}>
      <Paper elevation={2} sx={{...styles.Paper,bgcolor: !completed ? "white" : "#34eb61"}}>
        <Typography
          noWrap
          variant="h6"
          gutterBottom
          component="h6"
          sx={styles.TypoGraphy}
        >
          {title}
        </Typography>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            disabled={completed}
            onClick={() => handleCompleted(index)}
          >
            Completed
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
};
export default ToDO;
