import { ReactComponent as MoonSVG } from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <header className="bg-header-mobile bg-no-repeat bg-center bg-cover h-full max-h-[200px] px-5 pt-10 sm:bg-header-desktop md:max-h-[300px] sm:pt-16">
      <div className="flex justify-between items-center max-w-lg w-full m-auto">
        <h1 className="text-white text-2xl font-bold tracking-widest md:text-4xl">TODO</h1>
        <span className="w-5 md:w-6">
          <MoonSVG />
        </span>
      </div>
    </header>
  );
};

export default Header;
