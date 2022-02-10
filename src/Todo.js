import * as React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

function Todo() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid item xs={4}>
        <Card>
          <CardHeader
            title="To Do List"
            titleTypographyProps={{ variant: "h2", component: "h3" }}
          />
          <CardContent>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              fullWidth
            />
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Milk" />
              <FormControlLabel control={<Checkbox />} label="Sugar" />
              <FormControlLabel control={<Checkbox />} label="Eggs" />
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Todo;
