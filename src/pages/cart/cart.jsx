import React, { useState, useEffect } from "react";
import axios from "axios";
// 'https://fakestoreapi.com/products'
const Shop = ({ CartItems, RemoveFromCart }) => {
  const [products, setProducts] = useState([]);
  // setFake= for updating the data fake=initial data
  useEffect(() => {
    getProducts();
  }, [CartItems]);
  const getProducts = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    // console.log(response);
    // const jsonData = await response.json(); //converting data into object

    // console.log(jsonData);
    setProducts(
      response.data.filter((product) => {
        return product.id in CartItems;
      })
    ); //updating data
  };
  // fakeStore();

  // ----------------------------------------
  return (
    <>
      <h2 className="title">Cart</h2>

      <div className="container">
        {products.length === 0 && <p>Your cart is empty...</p>}
        {products.map((values) => {
          return (
            <div className="box" key={values.id}>
              <img src={[values.image]} alt="" />
              <div className="content">
                <h5 className="component_title">{[values.title]}</h5>
                <p className="description">{CartItems[values["id"]]}</p>
                <button
                  onClick={() => RemoveFromCart(values.id)}
                  className="addBttn">
                  Remove from Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
