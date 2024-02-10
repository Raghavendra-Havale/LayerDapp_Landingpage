import { AiFillPhone, AiFillHome } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useRef, useEffect } from "react";

function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    ) ;

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
  }, []);
  return (
    <footer className="bg-white text-graytext dark:bg-secondary">
      <div
        className="max-w-6xl mx-auto py-8 px-2 border-t border-t-graytext/20 section"
        ref={sectionRef}
      >
        <div className=" flex flex-col lg:flex-row lg:gap-5 gap-10">
          {/* Logo Section */}
          <div className="flex flex-col items-start lg:w-1/2 px-[5%] lg:px-[1%]">
            <a href="" className="flex items-end justify-center">
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

            <div className="mt-2 text-left lg:mt-[2rem]">
              &copy; 2023 Layerdapp. All rights reserved
            </div>
          </div>

          {/* Sections Container */}
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-0 px-[5%] lg:px-[1%] ">
            {/* Resources Section */}
            <div className="w-full">
              <h3 className="text-lg font-bold mb-3">Resources</h3>
              <ul className="space-y-2">
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
            <div className="w-full">
              <h3 className="text-lg font-bold mb-3">Company</h3>
              <ul className="space-y-2">
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
            <div className="w-full">
              <h3 className="text-lg font-bold mb-3">Contact Us</h3>
              <ul className="flex flex-col space-y-2">
                <li className="flex items-center hover:text-gray-300">
                  <AiTwotoneMail className="mr-2" />
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li className="flex items-center hover:text-gray-300">
                  <AiFillPhone className="mr-2" />
                  <a href="tel:+123456789">+123456789</a>
                </li>
                <li className="flex items-start hover:text-gray-300">
                  <AiFillHome className="mr-2" />
                  123 Main St, New Delhi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
