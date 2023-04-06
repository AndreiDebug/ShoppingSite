import React, { useState, useEffect } from "react";
import axios from "axios";
// 'https://fakestoreapi.com/products'
const Shop = ({ AddToCart }) => {
  const [fake, setFake] = useState([]);
  // setFake= for updating the data fake=initial data
  useEffect(() => {
    fakeStore();
  }, []);
  const fakeStore = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    // console.log(response);
    // const jsonData = await response.json(); //converting data into object

    // console.log(jsonData);
    setFake(response.data); //updating data
  };
  // fakeStore();

  // ----------------------------------------
  return (
    <>
      <h2 className="title">Techno-Shop</h2>

      <div className="container">
        {fake.map((values) => {
          return (
            <div className="box" key={values.id}>
              <img src={[values.image]} alt="" />
              <div className="content">
                <h5 className="component_title">{[values.title]}</h5>
                {/* <p className="description">description</p> */}
                <button
                  onClick={() => AddToCart(values.id)}
                  className="addBttn">
                  Add to Cart
                </button>
                <h3>${values.price}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
