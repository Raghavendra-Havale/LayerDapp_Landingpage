import { useRef, useEffect, useState } from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse24Img from "../assets/Ellipse24.png";
import Ellipse25Img from "../assets/Ellipse25.png";
import Ellipse20Img from "../assets/Ellipse20.png";
import Ellipse21Img from "../assets/Ellipse21.png";

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
    <section className="pt-16 bg-gradient-to-r from-gray-900 to-blue-900 ">
      <div class="md:h-full flex items-center text-white">
        <div class="container px-4 py-4 mx-auto ">
          <div className=" items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-1xl dark:text-white mb-3 text-left ">
              LAYERDAPP FEATURES
            </h1>

            <h1 className="font-poppins text-6xl text-left font-semibold  md:text-5xl text-white md:text-left">
              Create LSA
            </h1>

            <img
              src={Ellipse24Img}
              className="absolute bg-fixed right-0 sm:right-[1200px] lg:right-[1200px] xl:right-[1200px]  top-[1700px] h-[567px] w-[200px] sm:w-[200px] lg:w-[200px] xl:w-[200px]"
            />

            <img
              src={Ellipse25Img}
              className="absolute bg-fixed right-0 sm:right-[1060px] lg:right-[1060px] xl:right-[1060px]  top-[1700px] h-[567px] w-[350px] sm:w-[350px] lg:w-[350px] xl:w-[350px]"
            />
          </div>

          <div class="flex flex-wrap -m-4 ">
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center text-2xl text-white hover:text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed mb-3 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center text-2xl hover:text-white text-white">
                  Create Multiple Account
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center text-2xl hover:text-white text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
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

      <div class="md:h-full flex items-center text-white mt-20">
        <div class="container px-4 py-4 mx-auto">
          <div className="items-center justify-center mb-10 mt-10 ml-1">
            <h1 className="font-poppins text-1xl dark:text-white mb-3 text-right ">
              LAYERDAPP FEATURES
            </h1>
            <h1 className="font-poppins text-6xl font-semibold text-right md:text-5xl text-white md:text-right">
              Interact With Multiple Protocols
            </h1>

            <img
              src={Ellipse21Img}
              className="absolute right-0 bg-fixed   top-[2300px] h-[567px] w-[200px] sm:w-[200px] lg:w-[200px] xl:w-[200px]"
            />

            <img
              src={Ellipse20Img}
              className="absolute right-0 bg-fixed   top-[2300px] h-[567px] w-[350px] sm:w-[350px] lg:w-[350px] xl:w-[350px]"
            />
          </div>

          <div class="flex flex-wrap -m-4">
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center text-2xl hover:text-white text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center hover:text-white text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center hover:text-white text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
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
      <div class="md:h-full grid grid-rows-1   text-white mt-20">
        <div class="container px-4 py-4 mx-auto">
          <div className=" grid grid-cols-2 h-[330px] mb-10 mt-10 ml-1 sm:grid-cols-2">
            <h1 className="font-poppins  text-8xl text-left font-semibold  md:text-7xl text-white md:text-left">
              Diffusion{" "}
              <button className="absolute  -ml-20 font-normal text-sm px-2 rounded-full py-2 bg-red-500 tex">
                Comming soon
              </button>{" "}
              <br /> Vault
            </h1>
            <div class="p-4  sm:w-full lg:w-full grid hover:text-white">
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
                <div className="mt-5 text-center text-2xl hover:text-white text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
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
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 hover:text-white text-center text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center hover:text-white text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6  hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam modi, expedita quos doloremque autem ipsum itaque
                    incidunt ipsam reprehenderit fuga! Dolores quisquam eius cum
                    accusamus?
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 hover:text-white">
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
                <div className="mt-5 text-center hover:text-white text-2xl text-white">
                  Create Multiple Account
                </div>
                <div class="p-6 hover:text-white transition duration-300 ease-in">
                  <p class="leading-relaxed text-center mb-3">
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
