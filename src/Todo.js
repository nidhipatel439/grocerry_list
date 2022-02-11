import * as React from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

function Todo() {
  const [itemList, setItemList] = React.useState([]);

  function addItem() {
    const item = document.getElementById("outlined-basic").value;
    // console.log(itemList);
    // const prevItems = [...itemList]
    setItemList([...itemList, item]);

    document.getElementById("outlined-basic").value = "";
  }

  function deleteItem(indexOfList) {
    const newList = itemList.filter((item, index) => index !== indexOfList);
    setItemList(newList);
  }

  function onEnter(e) {
    if (e.keyCode === 13) {
      addItem();
    }
  }

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
              onKeyUp={onEnter}
            />
            <button onClick={addItem}>Add</button>
            <FormGroup>
              {itemList.map((x, y) => {
                return (
                  <div key={y}>
                    <FormControlLabel control={<Checkbox />} label={x} />
                    <button
                      onClick={function (event) {
                        deleteItem(y);
                      }}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
            </FormGroup>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Todo;
