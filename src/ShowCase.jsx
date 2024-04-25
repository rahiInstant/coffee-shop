const ShowCase = () => {
  return (
    <div className="pb-20  ">
      {/* main section */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-center">--- Sip & Savor ---</h1>
        <h1 className="text-[#331A15] text-[55px] font-Rancho mt-2 text-center">
          Our Popular Products
        </h1>
        {/* <div className="bg-[#E3B577] border-[#331A15] px-5 py-2 border mt-4 flex gap-3 items-center rounded-md w-fit">
          <h1 className="text-white font-Rancho text-2xl">Add Coffee</h1>
          <img className="w-5 h-4" src="/public/Vector.png" alt="" />
        </div> */}
      </div>

      <div className="flex justify-center">
      <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        <img className="w-48 h-56" src="/public/images/cups/Rectangle 10.png" alt="" />
        
      </div>
      </div>
    </div>
  );
};

export default ShowCase;