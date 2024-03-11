import { useRef, useEffect, useState } from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Features() {
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
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="pt-16 bg-offwhite dark:bg-secondary">
      <div className="flex flex-col mx-auto  p-4 section" ref={sectionRef}>
        <div className="self-center font-bold text-4xl relative text-darktext dark:text-white">
          LayerDapp Features
          <img
            src="../../underline.png"
            alt="underline image"
            className="absolute w-[300px] h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center self-center w-full md:w-1/2 mt-4">
          <h2 className="text-center flex-wrap font-semibold text-xl text-darktext dark:text-white">
            What makes Layedapp the preferred choice for customers?.
          </h2>
          <p className="text-center text-graytext text-lg">
            Lorem ipsum dolor sit amet consectetur. Facilisis commodo vulputate
            sagittis fames convallis.
          </p>
        </div>
      </div>

      <div class="md:h-full flex items-center text-gray-600">
        <div class="container px-4 py-4 mx-auto">
          <div className="items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-1xl dark:text-white mb-3 text-left ">
              LAYERDAPP FEATURES
            </h1>
            <h1 className="font-poppins text-6xl text-left font-semibold  md:text-5xl text-white md:text-left">
              Create LSA
            </h1>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:h-full flex items-center text-gray-600 mt-20">
        <div class="container px-4 py-4 mx-auto">
          <div className="items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-1xl dark:text-white mb-3 text-right ">
              LAYERDAPP FEATURES
            </h1>
            <h1 className="font-poppins text-6xl font-semibold text-right md:text-5xl text-white md:text-right">
              Interact With Multiple Protocols
            </h1>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIFFUSION VALUT SECTUON */}
      <div class="md:h-full grid grid-rows-1  text-gray-600 mt-20">
        <div class="container px-4 py-4 mx-auto">
          <div className=" grid grid-cols-2  mb-10 mt-10 ml-1 sm:grid-cols-2">
            <h1 className="font-poppins text-8xl text-left font-semibold  md:text-7xl text-white md:text-left">
              Diffusion <br /> Vault
            </h1>
            <div class="p-4 sm:w-full lg:w-full grid">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full bg-lsaCard  hover:bg-indigo-700 rounded-3xl overflow-hidden">
                <div class="w-20 h-20 mt-5 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 32 32"
                    class="h-7 w-7"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                  </svg>
                </div>
                <div className="mt-5 text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
