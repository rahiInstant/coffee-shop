import { IoMdEye } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { ImBin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ data }) => {


  
  return (
    <div className="py-20 ">
      {/* section header */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-center">--- Sip & Savor ---</h1>
        <h1 className="text-[#331A15] text-[55px] font-Rancho mt-2 text-center">
          Our Popular Products
        </h1>
        <Link to="/add">
          <div className="bg-[#E3B577] border-[#331A15] px-5 py-2 border mt-4 flex gap-3 items-center rounded-md w-fit">
            <h1 className="text-white font-Rancho text-2xl">Add Coffee</h1>
            <img className="w-5 h-4" src="/public/Vector.png" alt="" />
          </div>
        </Link>
      </div>

      {/* card */}
      <div className="flex justify-center">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 w-fit gap-5 justify-center mx-5 sm:mx-0">
          {data.map((item, id) => {
            return (
              <div
                key={id}
                className="bg-[#F5F4F1] p-8 rounded-xl flex flex-row md:flex-col xl:flex-row gap-8 items-center"
              >
                <div>
                  <img className="w-32 h-44" src={item.photo} alt="" />
                </div>
                <div className="text-[#1B1A1AB2] text-lg">
                  <h1>
                    <span className="text-[#1B1A1A] font-semibold">Name:</span>
                    {item.foodName}
                  </h1>
                  <h1>
                    <span className="text-[#1B1A1A] font-semibold">Chef:</span>{" "}
                    {item.chefName}
                  </h1>
                  <h1>
                    <span className="text-[#1B1A1A] font-semibold">Price:</span>{" "}
                    {item.price}
                  </h1>
                </div>
                <div className="text-white flex flex-col md:flex-row xl:flex-col gap-4 ">
                  <Link to={`/coffee/${item._id}`}>
                    <div className="p-2.5 rounded-md bg-[#D2B48C]">
                      <IoMdEye />
                    </div>
                  </Link>
                  <Link to={`/update/${item._id}`}>
                    <div className="p-2.5 rounded-md bg-[#3C393B]">
                      <IoPencilSharp />
                    </div>
                  </Link>
                  <div className="p-2.5 rounded-md bg-[#EA4744]">
                    <ImBin2 />
                  </div>
                </div>
              </div>
            );
          })}

          {/* card 01 */}
          {/* <div className="bg-[#F5F4F1] p-8 rounded-xl flex flex-row md:flex-col xl:flex-row gap-8 items-center">
            <div>
              <img className="w-32 h-44" src="/public/images/1.png" alt="" />
            </div>
            <div className="text-[#1B1A1AB2] text-lg">
              <h1>
                <span className="text-[#1B1A1A] font-semibold">Name:</span>
                Americano Coffee
              </h1>
              <h1>
                <span className="text-[#1B1A1A] font-semibold">Chef:</span> Mr.
                Matin Paul
              </h1>
              <h1>
                <span className="text-[#1B1A1A] font-semibold">Price:</span> 890
                Taka
              </h1>
            </div>
            <div className="text-white flex flex-col md:flex-row xl:flex-col gap-4 ">
              <Link to="/coffe/2">
                <div className="p-2.5 rounded-md bg-[#D2B48C]">
                  <IoMdEye />
                </div>
              </Link>
              <Link to="/update">
                <div className="p-2.5 rounded-md bg-[#3C393B]">
                  <IoPencilSharp />
                </div>
              </Link>
              <div className="p-2.5 rounded-md bg-[#EA4744]">
                <ImBin2 />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Product;
