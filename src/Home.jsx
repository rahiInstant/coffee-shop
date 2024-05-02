import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Feature from "./Feature";
import Product from "./Product";
import ShowCase from "./ShowCase";
import { useState } from "react";

const Home = () => {
  // const [data, setData] = useState(useLoaderData());
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Product ></Product>
      <ShowCase></ShowCase>
    </div>
  );
};

export default Home;
// data={data} setData={setData}