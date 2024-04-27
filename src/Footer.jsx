import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdPhone, MdLocationPin } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import "./footer.css";
const Footer = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="flex ">
      <div>
        <div
          id="foot"
          className="flex justify-center px-8 md:px-10  lg:px-24 py-10 md:py-16 lg:py-32 gap-8 flex-col md:flex-row md:items-center"
        >
          <div className="md:w-[60%]">
            <img
              src="/images/more/logo1.png"
              className="h-[90px] w-[75px]"
              alt=""
            />
            <h1 className="font-Rancho font-normal text-[#331A15] text-[45px] mt-6">
              Espresso Emporium
            </h1>
            <p className="text-[#1B1A1A] text-lg mt-8 w-full">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-5 text-[40px] mt-8 text-[#331A15]">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <IoLogoLinkedin />
            </div>
            <h1 className="font-Rancho font-normal text-[#331A15] text-[45px] mt-8">
              Get in Touch
            </h1>
            <div className="text-lg text-[#1B1A1A] mt-8 space-y-4">
              <div className="flex gap-2 items-center">
                <MdPhone></MdPhone> +88 01533 333 333
              </div>
              <div className="flex gap-2 items-center">
                <IoIosMail /> info@gmail.com
              </div>
              <div className="flex gap-2 items-center">
                <MdLocationPin /> 72, Wall street, King Road, Dhaka
              </div>
            </div>
          </div>
          {/* contact */}
          <div className="md:w-[40%] ">
            <h1 className="font-Rancho font-normal text-[#331A15] text-[45px]  ">
              Connect with Us
            </h1>
            <form className="mt-8 " onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 ">
                <input
                  type="text"
                  placeholder="name"
                  className="p-3 bg-white rounded-md outline-none"
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="email"
                  className="p-3 bg-white rounded-md outline-none"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="message"
                  className="p-3 bg-white rounded-md outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-6  text-2xl font-Rancho text-[#331A15] py-2 px-5 rounded-[30px] border-2 border-[#331A15] hover:bg-[#331A15] hover:text-white duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="font-Rancho bg-[url('/images/more/24.jpg')] bg-cover bg-no-repeat py-3 text-white text-lg text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
