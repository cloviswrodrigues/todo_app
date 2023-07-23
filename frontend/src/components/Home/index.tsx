import { ReactComponent as MoonSVG } from "../../assets/icon-moon.svg";

const Header = () => {
  return (
    <header className="bg-header-mobile bg-center h-[200px] px-6 pt-8 flex justify-between">
      <h1 className="text-white text-2xl font-bold tracking-widest">TODO</h1>
      <MoonSVG />
    </header>
  );
};

export default Header;
