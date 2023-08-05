import { ReactComponent as MoonSVG } from "../../assets/icon-moon.svg";
import { ReactComponent as SunSVG } from "../../assets/icon-sun.svg";

const Header = () => {

  function toggleTheme(){
    const html = document.querySelector('html');
    html?.classList.toggle('dark');
  }

  return (
    <header className="bg-header-mobile bg-no-repeat bg-center bg-cover h-full max-h-[200px] px-5 pt-10 basis-[300px] sm:bg-header-desktop md:max-h-[300px] md:pt-16 dark:bg-header-mobile-dark sm:dark:bg-header-desktop-dark">
      <div className="flex justify-between items-center max-w-lg w-full m-auto">
        <h1 className="text-white text-2xl font-bold tracking-widest md:text-4xl">TODO</h1>
        <span className="w-5 md:w-6" onClick={toggleTheme}>
          <span className="dark:hidden"><MoonSVG /></span>
          <span className="hidden dark:inline"><SunSVG /></span>  
        </span>
      </div>
    </header>
  );
};

export default Header;
