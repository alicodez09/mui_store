import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Checkbox, Radio, Typography } from "antd";
import { Prices } from "../../components/Prices";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { CardMedia } from "@mui/material";
const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  // Get all Categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  // Get All Products
  const getAllProducts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/v1/product/get-product`
    );
    console.log(data.products, "data");
    setProducts(data.products);
  };

  // Filter by Category Function
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) {
      getAllProducts();
    }
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) {
      filterProduct();
    }
  }, [checked, radio]);

  // Get Filtered Products
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filter`,
        { checked, radio }
      );
      setProducts(data?.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row" style={{ marginTop: "5rem" }}>
          <div className="col-md-3 mt-2">
            <h3 className="mt-5">Filter By Category</h3>
            <div className="d-flex flex-column">
              {categories?.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                >
                  <Typography> {c.name}</Typography>
                </Checkbox>
              ))}
            </div>
            <h3 className="mt-5">Filter By Price</h3>
            <div className="d-flex flex-column ">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>
          <div className="col-md-9">
            <h1>All Products</h1>
            {/* {JSON.stringify(radio, null, 4)} */}
            <div className="d-flex flex-wrap mt-4">
              {products?.map((p) => (
                <div className="card m-2" style={{ width: "18rem" }}>
                  <CardMedia
                    component="img"
                    alt={p.name}
                    height="auto"
                    draggable="false"
                    image={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    style={{
                      objectFit: "cover",
                      width: "50%",
                      height: "50%",
                      margin: "0 auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {`${p.description.substring(0, 70)}...`}
                    </p>
                    <p className="card-text">RS {p.price}</p>
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
