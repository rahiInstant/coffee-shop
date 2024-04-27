import { IoMdEye } from "react-icons/io";
import { IoPencilSharp } from "react-icons/io5";
import { ImBin2 } from "react-icons/im";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import swal from "sweetalert";

const Product = ({ data, setData }) => {
  function handleDelete(id) {
    swal({
      text: "Are you want to delete this product?",
      button: {
        text: "Delete",
        closeModal: false,
      },
      icon: "warning",
      dangerMode: true,
    })
      .then(() => {
        return fetch(`https://coffe-shop-backend.vercel.app/add/${id}`, {
          method: "DELETE",
        });
      })
      .then((res) => res.json())
      .then((id) => {
        const Actual = data.filter((item) => item._id !== id._id);
        setData(Actual);
        swal("Product Deleted", "Product deleted successfully.", "success");
      })
      .catch(() =>
        swal(
          "Couldn't delete!",
          "Product cannot delete due to unexpected error. Please check your internet connection",
          "error"
        )
      );
  }

  return (
    <div className="py-20 relative">
      {/* section header */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-center">--- Sip & Savor ---</h1>
        <h1 className="text-[#331A15] text-[55px] font-Rancho mt-2 text-center">
          Our Popular Products
        </h1>
        <Link to="/add">
          <div className="bg-[#E3B577] border-[#331A15] px-5 py-2 border mt-4 z-40 flex gap-3 items-center rounded-md w-fit">
            <h1 className="text-white font-Rancho text-2xl">Add Coffee</h1>
            <img className="w-5 h-4" src="/Vector.png" alt="" />
          </div>
        </Link>
      </div>

      <div className="absolute top-44 lg:top-24 left-0 hidden lg:block">
        <img src="/images/more/4.png" alt="" />
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img src="/images/more/5.png" alt="" />
      </div>

      {/* card */}
      <div className="flex justify-center ">
        <div className="mt-12 grid grid-cols-1 w-full  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  gap-5 justify-center mx-5 md:mx-10 xl:mx-16 ">
          {data.map((item, id) => {
            return (
              <div
                key={id}
                className="bg-[#F5F4F1] w-full z-10 p-8 rounded-xl flex flex-col xl:flex-row gap-8 items-center"
              >
                <div>
                  <img className="w-32 h-44" src={item.photo} alt="" />
                </div>
                <div className="text-[#1B1A1AB2] text-lg flex-auto">
                  <h1>
                    <span className="text-[#1B1A1A] font-semibold">Name:</span>{" "}
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
                <div className="text-white flex flex-row xl:flex-col gap-4 ">
                  <Link to={`/coffee/${item._id}`}>
                    <div className="p-2.5 rounded-md bg-[#D2B48C] cursor-pointer">
                      <IoMdEye />
                    </div>
                  </Link>
                  <Link to={`/update/${item._id}`}>
                    <div className="p-2.5 rounded-md bg-[#3C393B] cursor-pointer">
                      <IoPencilSharp />
                    </div>
                  </Link>
                  <div
                    onClick={() => {
                      handleDelete(item._id);
                    }}
                    className="p-2.5 rounded-md bg-[#EA4744] cursor-pointer"
                  >
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
  setData: PropTypes.func.isRequired,
};

export default Product;
