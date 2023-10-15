function Footer() {
  return (
    <footer className=" bg-offwhite">
      <div className="mx-auto max-w-6xl p-4 flex flex-col">
        <hr className="border-t border-graytext/20 my-3" />
        <div className="flex justify-between items-center text-graytext py-5">
          <div>&copy; 2023 Layerdapp. All rights reserved</div>
          <div className="flex ml-auto">
            <span className="mr-2">
              <a href="#" className="text-graytext hover:text-gray-800">
                Terms
              </a>
            </span>
            <span className="mr-2">
              <a href="#" className="text-graytext hover:text-gray-800">
                Privacy
              </a>
            </span>
            <span>
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
