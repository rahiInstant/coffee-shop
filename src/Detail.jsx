import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div className="px-20 ">
      <Link to="/">
        <div className="text-2xl flex items-center text-[#331A15] mt-10 gap-4">
          <IoMdArrowBack />
          <h1 className="font-Rancho ">Back to home</h1>
        </div>
      </Link>
      <div className="py-16 px-24 bg-[#F4F3F0] mt-10 mb-16 flex gap-5 items-center">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-Rancho text-[50px] text-[#331A15]">Niceties</h1>
          <img  src="/public/images/1.png" alt="" />
        </div>
        <div className="">
          <div className="text-[#5C5B5B] font-normal font-railway space-y-1">
            <h2>
              <span className="text-lg text-[#1B1A1A] font-semibold">
                Name:
              </span>
              Americano Coffee
            </h2>
            <h2>
              <span className="text-lg text-[#1B1A1A] font-semibold">
                Chef:
              </span>
              Mr. Matin Paul
            </h2>
            <h2>
              <span className="text-lg text-[#1B1A1A] font-semibold">
                Supplier:
              </span>
              Cappu Authorizer
            </h2>
            <h2>
              <span className="text-lg text-[#1B1A1A] font-semibold">
                Taste:
              </span>
              Sweet and hot
            </h2>
            <h2>
              <span className="text-lg text-[#1B1A1A] font-semibold">
                Category:
              </span>
              Americano
            </h2>
            <h2>
              <span className="text-lg text-[#1B1A1A] font-semibold">
                Details:
              </span>
              Espresso with hot water
            </h2>
          </div>
          <div className=" text-justify text-[#5C5B5B] mt-6">
            Experience the essence of Italy with Americano Coffee by Chef Matin
            Paul. Crafted with care and sourced from Cappu Authorizer, it's a
            delightful blend of sweet and hot flavors. Enjoy the classic
            espresso infusion with hot water for an authentic taste sensation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
