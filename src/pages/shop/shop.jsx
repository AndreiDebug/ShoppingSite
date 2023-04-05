import React, { useState, useEffect } from "react";

// 'https://fakestoreapi.com/products'
const Shop = () => {
  const [fake, setFake] = useState([]);
  // setFake= for updating the data fake=initial data
  useEffect(() => {
    fakeStore();
  }, []);
  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json(); //converting data into object
    // console.log(jsonData);
    setFake(jsonData); //updating data
  };
  // fakeStore();

  // ----------------------------------------
  return (
    <>
      <h2>Fake API SHOP</h2>

      <div className="container">
        {fake.map((values) => {
          return (
            <>
              <div className="box">
                <div className="content">
                  <h5>{[values.title]}</h5>
                  <p>description</p>
                </div>
                <img src={[values.image]} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
