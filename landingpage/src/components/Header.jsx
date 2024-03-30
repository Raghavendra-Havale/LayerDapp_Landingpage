import { AiOutlineMenu } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import useDarkSide from "../assets/Themes";
import { useState } from "react";

function Header() {
  const [colorTheme, setColorTheme] = useDarkSide();
  const [
    // darkSide,
    setDarkSide,
  ] = useState();
  colorTheme === "light" ? true : false;
  const [open, setOpen] = useState(false);

  const toggleDarkMode = (checked) => {
    setColorTheme(colorTheme);
    setDarkSide(checked);
  };

  const handleOpen = () => {
    setOpen((open) => !open);
  };

  return (
    <header className="bg-transparent pt-10 max-w-7xl inset-x-0 top-0 z-10 flex h-[76px] items-center justify-between text-graytext px-4 mx-auto rounded-t-none rounded-b-lg">
      <a href="" className="flex items-end justify-center gap-2">
        <img src="../../Group_1.png" alt="logo" className="w-full h-auto z-50" />
        <img
          src="../../LayerDapp_1.png"
          alt="logo"
          className="w-full h-7 -pb-2 z-50"
        />
      </a>
      <nav className="items-center justify-center hidden md:flex relative bg-[#020916] rounded-lg gap-9 h-[44px] px-10">
        <div className="flex-row m-0 flex h-full list-none items-center gap-4 p-0 top-0 left-0">
          <div>
            <a
              href="https://docs.layerdapp.xyz"
              target="_blank"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium text-lg lg:text-sm whitespace-nowrap rounded text-light `}
            >
              Docs
            </a>
          </div>
          <div>
            <a
              href="https://discord.gg/qSs6U7VF"
              target="_blank"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light`}
            >
              Community
            </a>
          </div>
          <div>
            <a
              href="https://docs.layerdapp.xyz/information/faqs"
              target="_blank"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light`}
            >
              FAQs
            </a>
          </div>
        </div>
      </nav>
      <div className="flex items-center justify-center md:hidden">
        <span className="mx-6 h-[30px] w-px bg-[#393939] xl:mr-8 lg:hidden"></span>
        <div className="cursor-pointer text-3xl relative outline-none transform-none text-white flex lg:hidden">
          <AiOutlineMenu
            className="text-darktext dark:text-white"
            onClick={handleOpen}
          />
          {open && (
            <nav
              className={`absolute top-9 w-[1500px] h-[1000px] -left-[900%] min-[540px]:-left-[1500%] p-10 dark:bg-darktext bg-white hide ${
                open ? "reveal-bar" : ""
              }`}
            >
              <ul className="text-darktext dark:text-white flex flex-col gap-7">
                <li>
                  <a href="https://docs.layerdapp.xyz" target="_blank" className="">
                    
                    Docs
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/qSs6U7VF" target="_blank" className="">
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.layerdapp.xyz/information/faqs"
                    target="_black"
                    className=""
                    onClick={() => setOpen(false)}
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://v1-frontend-staging.vercel.app"
                    target="_blank"
                    className=""
                    onClick={() => setOpen(false)}
                  >
                    <button  className="flex items-center gap-1.5 px-16 h-[36px] text-xl font-medium text-white bg-[#1869F4] hover:bg-light/30 rounded-md cursor-pointer">
                      Launch App
                    </button>
                  </a>
                </li>
                <li className="flex items-center justify-start gap-3">
                  <a
                    href="https://twitter.com/LayerDapp"
                    target="_blank"
                    className="text-darktext dark:text-white"
                  >
                    <RiTwitterXFill className="text-3xl" />
                  </a>
                  <a
                    href="https://discord.gg/eDwnvCc8nB"
                    target="_blank" 
                    className="text-darktext dark:text-white"
                  >
                    <FaDiscord className="text-3xl" />
                  </a>
                  <a
                    href="https://github.com/LayerDapp"
                    target ="_blank"
                    className="text-darktext dark:text-white"
                  >
                    {" "}
                    <FaGithub className="text-3xl" />
                  </a>
                </li>
                
              </ul>
            </nav>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-4 ml-auto md:ml-0">
  <a
    href="https://v1-frontend-staging.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-md font-normal text-white bg-[#1869F4] hover:bg-[#1658c0] rounded-2xl cursor-pointer z-[100]"
    style={{ textDecoration: 'none' }}
  >
    Launch App
  </a>
</div>





    </header>
  );
}

export default Header;

/* <div>
  <input type="checkbox" id="checkbox" />
  <label className="toggle cursor-pointer p-1 rounded-[14px] relative w-[45px] h-[40px] flex flex-col items-center justify-center gap-[3px] bg-white duration-75">
    <div className="bars" id="bar1"></div>
    <div className="bars" id="bar2"></div>
    <div className="bars" id="bar3"></div>
  </label>
</div>; */
//Dark mode toggle component
//   const Switcher = () => {
//     const [colorTheme, setColorTheme] = useDarkSide();
//     const [darkSide, setDarkSide] = useState(
//       colorTheme === "light" ? true : false
//     );
//     const toggleDarkMode = (checked) => {
//       setColorTheme(colorTheme);
//       setDarkSide(checked);
//     };
//     return (
//       <div
//         onClick={toggleDarkMode}
//         className="justify-between items-center pt-2 my-6 flex w-fit gap-1 h-fit m-auto cursor-pointer translate-all duration-300 dark:bg-dark0   border-t border-secondary px-5 bg-light"
//       >
//         <div className="text-2xl">
//           {colorTheme === "light" || !darkSide ? (
//             <BiSolidMoon />
//           ) : (
//             <BiSolidSun />
//           )}
//         </div>
//         <p className={`text-lg capitalize`}>Switch to {colorTheme}</p>
//       </div>
//     );
//   };