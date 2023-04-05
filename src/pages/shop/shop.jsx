import React, { useState, useEffect } from "react";

// 'https://fakestoreapi.com/products'
const Shop = () => {
  const [fake, setFake] = useState([]);
  // setFake= for updating the data fake=initial data
  useEffect(() => {
    fakeStore();
  }, []);
  const fakeStore = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    // console.log(response);
    const jsonData = await response.json(); //converting data into object
    // console.log(jsonData);
    setFake(jsonData); //updating data
  };
  // fakeStore();

  // ----------------------------------------
  return (
    <>
      <h2 className="title">Techno-Shop</h2>

      <div className="container">
        {fake.map((values) => {
          return (
            <>
              <div className="box">
                <img src={[values.image]} alt="" />
                <div className="content">
                  <h5 className="component_title">{[values.title]}</h5>
                  {/* <p className="description">description</p> */}
                  <button className="addBttn">Add to Cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
