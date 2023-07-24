import { ReactComponent as MoonSVG } from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <header className="bg-header-mobile bg-no-repeat bg-center h-[200px] px-5 pt-10">
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
