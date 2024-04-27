import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import swal from "sweetalert";
const AddCoffe = () => {
  function handleAddProduct(e) {
    e.preventDefault();
    const form = e.target;
    const foodName = form.food.value;
    const chefName = form.chef.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const coffeeInfo = {
      foodName,
      chefName,
      supplier,
      price,
      category,
      details,
      photo,
    };
    fetch("https://coffe-shop-backend.vercel.app/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => "");
    form.reset();
  }
  return (
    <div className="px-8 lg:px-20 ">
      <Link
        to="/"
        className="text-2xl flex items-center text-[#331A15] mt-10 gap-4 w-fit"
      >
        <IoMdArrowBack />
        <h1 className="font-Rancho ">Back to home</h1>
      </Link>
      <div className="py-5 lg:py-16 px-7 lg:px-24 bg-[#F4F3F0] mt-10 mb-16  gap-5 items-center">
        <div>
          <h1 className="font-Rancho text-[45px] text-[#374151] text-center">
            Add New Coffee
          </h1>
          <p className="font-railway text-lg mt-8 text-center text-[#374151]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="text-[#1B1A1ACC]   mt-8">
          <form className="space-y-6" onSubmit={handleAddProduct}>
            <div className="flex gap-6 items-center flex-col sm:flex-row">
              <div className="w-full">
                <label className="block  font-semibold text-xl" htmlFor="food">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="food name"
                  name="food"
                  id="food"
                  className="mt-4 p-3 rounded-md outline-none bg-white w-full "
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold text-xl" htmlFor="chef">
                  Chef
                </label>
                <input
                  type="text"
                  placeholder="chef name"
                  name="chef"
                  id="chef"
                  className="mt-4 p-3 rounded-md outline-none bg-white w-full "
                />
              </div>
            </div>
            <div className="flex gap-6 items-center flex-col sm:flex-row">
              <div className="w-full">
                <label
                  className="block  font-semibold text-xl"
                  htmlFor="supplier"
                >
                  Supplier
                </label>
                <input
                  type="text"
                  placeholder="supplier name"
                  name="supplier"
                  id="supplier"
                  className="mt-4 p-3 rounded-md outline-none bg-white w-full "
                />
              </div>
              <div className="w-full">
                <label className="block font-semibold text-xl" htmlFor="price">
                  Price
                </label>
                <input
                  type="text"
                  placeholder="Price of the product"
                  name="price"
                  id="price"
                  className="mt-4 p-3 rounded-md outline-none bg-white w-full "
                />
              </div>
            </div>
            <div className="flex gap-6 items-center flex-col sm:flex-row">
              <div className="w-full">
                <label
                  className="block text-xl  font-semibold"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  type="text"
                  placeholder="category name"
                  name="category"
                  id="category"
                  className="mt-4 p-3 rounded-md outline-none bg-white w-full "
                />
              </div>
              <div className="w-full">
                <label
                  className="block text-xl font-semibold"
                  htmlFor="details"
                >
                  Details
                </label>
                <input
                  type="text"
                  placeholder="details information about product"
                  name="details"
                  id="details"
                  className="mt-4 p-3 rounded-md outline-none bg-white w-full "
                />
              </div>
            </div>
            <div>
              <label className="block text-xl font-semibold" htmlFor="details">
                photo URL
              </label>
              <input
                type="url"
                name="photo"
                id="photo"
                placeholder="place photo url of product"
                className="mt-4 p-3 rounded-md outline-none bg-white w-full"
              />
            </div>
            <button
              onClick={() =>
                swal({
                  title: "Coffee Added",
                  text: "Product is successfully added to the database. Thank you.",
                  icon: "success",
                })
              }
              type="submit"
              className="text-[#331A15] font-Rancho text-2xl bg-[#D2B48C] border-2 border-[#331A] p-3 rounded-md w-full"
            >
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
