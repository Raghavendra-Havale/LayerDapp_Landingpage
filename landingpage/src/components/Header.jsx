import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <header className="fixed max-w-6xl inset-x-0 top-0 z-10 flex h-[56px] items-center justify-between bg-white text-graytext px-4 sm:sticky mx-auto rounded-lg">
      <a href="#" className="flex items-end justify-center gap-2">
        <img src="../../logo.png" alt="logo" className="w-full h-auto" />
        <img
          src="../../LayerDapp.png"
          alt="logo"
          className="w-full h-5 -pb-2"
        />
      </a>
      <nav className="h-full items-center justify-center flex relative">
        <span className="mr-6 h-[17px] w-px bg-[#393939] xl:mr-8 lg:hidden"></span>
        <div className="cursor-pointer text-2xl relative outline-none transform-none text-white flex lg:hidden">
          <AiOutlineMenu />
        </div>
        <div className="flex-row m-0 flex h-full list-none items-center gap-4 p-0 top-0 left-0">
          <div>
            <a
              href="https://docs.layerdapp.xyz"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium text-lg lg:text-sm whitespace-nowrap rounded text-light `}
            >
              Docs
            </a>
          </div>
          <div>
            <a
              href="https://discord.gg/qSs6U7VF"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light`}
            >
              Community
            </a>
          </div>
          <div>
            <a
              href="#"
              className={`flex p-4 px-5 -ml-4 lg:-ml-0 lg:px-[10px] lg:h-[37px] select-none items-center  font-medium  text-lg lg:text-sm  whitespace-nowrap rounded text-light`}
            >
              FAQs
            </a>
          </div>
        </div>
      </nav>
      <div className="flex items-center gap-4">
        <a href="https://v1-frontend-staging.vercel.app" className="">
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-btn hover:bg-light/30 rounded-md cursor-pointer">
            Launch App
          </button>
        </a>
        <div className="">
          <label className="toggle">
            <input id="switch" className="input" type="checkbox" />
            <div className="icon icon--moon">
              <svg
                height="20"
                width="20"
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>

            <div className="icon icon--sun">
              <svg
                height="20"
                width="20"
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;

{
  /* <div>
  <input type="checkbox" id="checkbox" />
  <label className="toggle cursor-pointer p-1 rounded-[14px] relative w-[45px] h-[40px] flex flex-col items-center justify-center gap-[3px] bg-white duration-75">
    <div className="bars" id="bar1"></div>
    <div className="bars" id="bar2"></div>
    <div className="bars" id="bar3"></div>
  </label>
</div>; */
}
