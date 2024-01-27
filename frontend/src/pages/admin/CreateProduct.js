import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/AdminMenu";
import { useAuth } from "../../context/authContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CreateProduct = () => {
  const [auth, setAuth] = useAuth();
  const [refresh, setRefresh] = useState(false);

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");

  // TODO Get Category API

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong while getting all categories");
    }
  };

  useEffect(() => {
    getCategories();
    console.log(categories, "categories");
  }, [refresh]);

  return (
    <Container fluid>
      <Grid container className="vh-100 bg-light">
        <Grid item xs={4}>
          <AdminMenu />
        </Grid>
        <Grid item xs={8} mt={5} pt={2}>
          <Typography variant="h2" align="center">
            Create Product
          </Typography>
          <Card className="w-75 p-5 m-auto bg-dark">
            <FormControl fullWidth variant="standard">
              <InputLabel>Select Category</InputLabel>
              <Select
                labelId="select-label"
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {categories.map((c) => (
                  <MenuItem
                    key={c._id}
                    value={c.name}
                    style={{ padding: "8px" }}
                  >
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
