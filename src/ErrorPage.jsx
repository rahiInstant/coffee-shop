import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto flex flex-col">
      <Header></Header>
      <div className="bg-white">
        <Link
          to="/"
          className="text-2xl mt-5 ml-5 flex items-center text-[#331A15]  gap-4 w-fit"
        >
          <IoMdArrowBack />
          <h1 className="font-Rancho ">Back to home</h1>
        </Link>
        <img
          className="w-full h-full"
          src="/images/404/404.gif"
          alt=""
        />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
