function Footer() {
  return (
    <footer className="bg-offwhite dark:bg-secondary">
      <div className="mx-auto max-w-6xl p-4 flex flex-col items-center lg:items-start">
        <hr className="border-t border-graytext/20 my-3 w-full" />
        <div className="flex flex-col lg:flex-row justify-between items-center text-graytext py-5 w-full">
          <div className="mb-4 lg:mb-0 min-w-full lg:min-w-0 lg:flex-grow text-center lg:text-left">
            &copy; 2023 Layerdapp. All rights reserved
          </div>
          <div className="flex flex-wrap">
            <span className="mr-2 mb-2 lg:mb-0">
              <a href="#" className="text-graytext hover:text-gray-800">
                Terms
              </a>
            </span>
            <span className="mr-2 mb-2 lg:mb-0">
              <a href="#" className="text-graytext hover:text-gray-800">
                Privacy
              </a>
            </span>
            <span className="mb-2 lg:mb-0">
              <a href="#" className="text-graytext hover:text-gray-800">
                Cookies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
