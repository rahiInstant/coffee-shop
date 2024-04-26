import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Feature from "./Feature";
import Product from "./Product";
import ShowCase from "./ShowCase";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Product data={data}></Product>
      <ShowCase></ShowCase>
    </div>
  );
};

export default Home;
