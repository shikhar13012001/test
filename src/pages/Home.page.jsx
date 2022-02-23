import React from "react";
import {
  Button,
  Box,
  Grid,
  Container,
  Typography,
  TextField,
} from "@mui/material";
import DateTimePicker from "@mui/lab/DateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import ToDo from "../components/ToDO.component";
import usePersistedState from "../hooks/usePersistedState";
const styles = {
  Form: { mt: 1, bgcolor: "white", p: 10, borderRadius: 2 },
  container: {
    bgcolor: "#E8F3FE",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const Home = () => {
  const [todo, setTodo] = usePersistedState("todo", []);
  const handleDelete = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };
  const handleComplete=(index)=>{
   const CompletedTodo=todo[index];
   CompletedTodo.completed=true;
   const newTodo=[...todo];
   newTodo.splice(index,1);
   setTodo([...newTodo,CompletedTodo]);


  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const todoItem = {
      title: data.get("title"),
      description: data.get("description"),
      date: data.get("date"),
      completed:false
    };
    setTodo([...todo, todoItem]);
    console.log(todoItem);
  };
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const handleDate = (event) => {
    console.log(event);
    setDate(event);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container sx={{ ...styles.container }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={styles.Form}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ color: "#003979", textAlign: "center" }}
          >
            Task Manager
          </Typography>

          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Task Title"
            name="title"
            autoComplete="text"
            autoFocus
          />
          <TextField
            margin="normal"
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            fullWidth
            minRows={4}
            value={value}
            onChange={handleChange}
          />
          <DateTimePicker
            label="Date&Time"
            value={date}
            onChange={handleDate}
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{ color: "#003979", mt: 5 }}
        >
          Your Tasks
        </Typography>
        <Grid container justifyContent="center">
          {todo.map((item, index) => (
            <ToDo
              key={index}
              {...item}
              index={index}
              handleDelete={handleDelete}
              handleCompleted={handleComplete}
            />
          ))}
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default Home;
