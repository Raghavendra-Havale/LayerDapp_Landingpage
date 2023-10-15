function Footer() {
  return (
    <div>
      <hr className="border-t border-gray-400 my-3" />
      <div className="flex justify-between items-center text-gray-600 py-5">
        <div>
          &copy; 2023 Layerdapp. All rights reserved
        </div>
        <div className="flex ml-auto">
          <span className="mr-2">
            <a href="#" className="text-gray-400 hover:text-gray-800">
              Terms
            </a>
          </span>
          <span className="mr-2">
            <a href="#" className="text-gray-400 hover:text-gray-800">
              Privacy
            </a>
          </span>
          <span>
            <a href="#" className="text-gray-400 hover:text-gray-800">
              Cookies
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
