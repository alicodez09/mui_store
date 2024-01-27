import React from "react";
import { TextField, Button } from "@mui/material";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e, setValue)}
        style={{ width: "75%", margin: "auto" }}
      >
        <TextField
          label="Enter new Category"
          variant="outlined"
          value={value}
          fullWidth
          onChange={(e) => setValue(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default CategoryForm;
