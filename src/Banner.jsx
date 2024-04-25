import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner" className="flex flex-col  lg:flex-row px-10 lg:px-24 gap-5">
      <div className="lg:w-[45%]"></div>
      <div className="lg:w-[55%] flex flex-col justify-center">
        <h1 className="font-Rancho text-[45px]">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <h1 className="mt-4">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </h1>
        <button className="py-2 px-5 bg-[#E3B577] text-[#242222] mt-8 w-fit text-2xl font-Rancho">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
