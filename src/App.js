import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";
import DataField from "./components/DataField";

function App() {
  const [rollno, setrollno] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { id: Date.now(), rollno, firstname, lastname }]);
    setrollno("");
    setfirstname("");
    setlastname("");
  };

  const StudentData = [
    {
      id: "A101",
      rollno: "01",
      lastname: "LastnameA101",
      middlename: "",
      firstname: "StudentA101",
      dateOfJoining: "2021-02-13",
    },
    {
      id: "A102",
      rollno: "02",
      lastname: "LastnameA102",
      middlename: "",
      firstname: "StudentA102",
      dateOfJoining: "2021-04-24",
    },
    {
      id: "B101",
      rollno: "01",
      lastname: "LastnameB101",
      middlename: "",
      firstname: "StudentB101",
      dateOfJoining: "2020-10-20",
    },
  ];

  return (
    <div className="App">
      <Header />
      {/* Form Section */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            value={rollno}
            onChange={(event) => setrollno(event.target.value)}
            label="rollno"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            type="number"
            color="success"
            value={firstname}
            onChange={(event) => setfirstname(event.target.value)}
            label=" firstname"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            value={lastname}
            onChange={(event) => setlastname(event.target.value)}
            label="lastname"
            color="warning"
            variant="outlined"
          />
          <Button onClick={addData} color="success" variant="contained">
            <PersonAddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data Show */}
      <div className="data">
        <div className="data_head">
          <h3>rollno</h3>
          <h3> firstname</h3>
          <h3>lastname</h3>
          <h3>Update</h3>
          <h3>Remove</h3>
        </div>
        {StudentData.map((element, index) => (
          <DataField
            key={element.id}
            index={index}
            rollno={element.rollno}
            firstname={element.firstname}
            lastname={element.lastname}
            data={StudentData}
            setData={setData}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
