import { AiFillPhone, AiFillHome } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-white text-graytext dark:bg-secondary">
      <div className="container mx-auto py-8 flex flex-wrap items-center justify-center lg:justify-between">
        {/* Logo Section */}
        <div className="mb-8 lg:mb-0 ml-16 flex flex-col items-center lg:items-start">
          <a href="" className="flex items-end justify-center space-x-2">
            <img
              src="../../logo.png"
              alt="logo"
              className="w-full h-7 object-contain"
            />
            <img
              src="../../LayerDapp.png"
              alt="logo"
              className="w-25 h-5 object-contain -pb-2"
            />
          </a>

          <div className="mt-2 lg:mt-0 text-center lg:text-left lg:mt-[2rem]">
            &copy; 2023 Layerdapp. All rights reserved
          </div>
        </div>

        {/* Sections Container */}
        <div className="w-full lg:w-2/3 flex flex-wrap items-center justify-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Resources Section */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-bold mb-3">Resources</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-bold mb-3">Company</h3>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Socials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <ul className="flex flex-col space-y-2">
              <li className="flex items-center">
                <AiTwotoneMail className="mr-2" />
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
              <li className="flex items-center">
                <AiFillPhone className="mr-2" />
                 <a href="tel:+123456789">+123456789</a>
              </li>
              <li className="flex items-center">
                <AiFillHome className="mr-2" />
                 123 Main St, New Delhi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
