import "./Header.css";

const Header = () => {
  return (
    <div id="head" className="flex items-center justify-center gap-3 ">
      <img src="/images/more/logo1.png" className="w-16 h-20" alt="" />
      <h1 className="font-Rancho font-normal text-white text-[45px] lg:text-[60px] text-center">
        Espresso Emporium
      </h1>
    </div>
  );
};

export default Header;
