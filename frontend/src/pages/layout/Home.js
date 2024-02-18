import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
// import { Checkbox } from "@mui/material";
import { Checkbox } from "antd";
import { Typography } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  // get all categories
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
  }, []);
  const handleFilter = (value, id) => {
    // Create a copy of the current 'checked' state array
    let category = [...checked];
    // Check if the checkbox is checked
    if (value) {
      category.push(id);
    } else {
      // If the checkbox is unchecked, filter out the 'id' from the 'category' array
      category = category.filter((c) => c !== id);
    }
    setChecked(category);
  };
  // Get All Products
  const getAllProducts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/product/get-product`
    );
    console.log(data.products, "data");
    setProducts(data.products);
  };
  useEffect(() => {
    getAllProducts();
  }, []);
  // Truncate text function
  const truncateText = (text, limit) => {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-md-3 mt-2">
            {JSON.stringify(checked, null, 4)}
            <h3>Filter By Category</h3>
            <div className="d-flex flex-column mt-5">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  <Typography> {c.name}</Typography>
                </Checkbox>
              ))}
            </div>
          </div>
          <div className="col-md-9">
            <h1>All Products</h1>

            <div className="d-flex flex-wrap mt-4">
              {products?.map((p) => (
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {truncateText(p.description, 50)}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button className="btn btn-primary btn-sm">
                        See more
                      </button>
                      <button className="btn btn-danger btn-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
