import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div className="px-20">
      <Link to="/">
        <div className="text-2xl flex items-center text-[#331A15] mt-10 gap-4">
          <IoMdArrowBack />
          <h1 className="font-Rancho ">Back to home</h1>
        </div>
      </Link>
      <div className="py-16 px-24 bg-[#F4F3F0] mt-10 mb-16">
        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Detail;
