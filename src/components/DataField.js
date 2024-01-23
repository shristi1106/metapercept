import Button from "@mui/material/Button";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const DataField = ({ rollno, firstname, lastname, index, data, setData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(firstname);
  const [editedLastName, setEditedLastName] = useState(lastname);

  const removeItem = () => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  
  const handleUpdate = () => {
    let arr = data;
    arr[index].firstname = editedFirstName;
    arr[index].lastname = editedLastName;
    setData([...arr]);
    setIsEditing(false);
  };

  return (
    <div key={index} className="data_head">
      {!isEditing ? (
        <>
          <p>{rollno}</p>
          <p>{firstname}</p>
          <p>{lastname}</p>
          <Button onClick={() => setIsEditing(true)} id="edit" variant="contained" color="warning">
            <EditIcon />
          </Button>
          <Button onClick={removeItem} id="delete" variant="contained" color="error">
            <PersonRemoveIcon />
          </Button>
        </>
      ) : (
        <>
          <TextField
            label="Edit First Name"
            value={editedFirstName}
            onChange={(e) => setEditedFirstName(e.target.value)}
          />
          <TextField
            label="Edit Last Name"
            value={editedLastName}
            onChange={(e) => setEditedLastName(e.target.value)}
          />
          <Button onClick={handleUpdate} variant="contained" color="success">
            Update
          </Button>
          <Button onClick={() => setIsEditing(false)} variant="contained">
            Cancel
          </Button>
        </>
      )}
    </div>
  );
};

export default DataField;
