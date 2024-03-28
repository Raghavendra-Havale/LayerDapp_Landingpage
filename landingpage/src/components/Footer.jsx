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
    <footer className="  text-graytext bg-[#151D29]">
      <div
        className="max-w-6xl  h-20  mx-auto  border-t border-t-[#1869F4]/30 section"
        ref={sectionRef}
      >
        <div className="mt-2 px-5 text-[#98A2B3] flex justify-between text-left lg:mt-[2rem]">
            <div>  &copy; 2023 Layerdapp. All rights reserved </div>

            <div className="flex gap-x-5">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Cookies</p>
            </div>

          


            </div>
      </div>
    </footer>
  );
}

export default Footer;
