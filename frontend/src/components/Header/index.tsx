import { ReactComponent as MoonSVG } from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <header className="bg-header-mobile bg-no-repeat bg-center h-full max-h-[200px] px-5 pt-10 sm:bg-header-desktop sm:max-h-[300px]">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-widest">TODO</h1>
        <span className="w-5">
          <MoonSVG />
        </span>
      </div>
    </header>
  );
};

export default Header;
