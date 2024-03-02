import { useRef, useEffect, useState } from "react";
import { BiLogoDiscordAlt } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Features() {
  const sectionRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    arrows: false,
    // beforeChange: (oldIndex, newIndex) => setCurrentSlideIndex(newIndex),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 400,

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    arrows: false,
    // beforeChange: (oldIndex, newIndex) => setCurrentSlideIndex(newIndex),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const [image, setImage] = useState("vault.png"); // Set your default image here

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
      <div
        className="flex flex-col mx-auto max-w-6xl p-4 section"
        ref={sectionRef}
      >
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

        <div className="slider-container mt-100 p-20 ">
          <div className="items-center justify-center mb-4">
            <h1 className="font-semibold text-2xl text-center md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent md:text-right">
              Create LSA
            </h1>
          </div>

          <Slider {...settings}>
            <div
              class="px-3 p-10 sm:grid-cols-1 grid rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-darktext hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2"
              style={{ width: "50px", height: "40px" }}
            >
              <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                  ></path>
                </svg>
              </div>
              <div class="content text-left mt-6 p-3">
                <a
                  class="title h5 text-lg font-medium hover:text-blue-600 dark:text-white"
                  href="/index-course"
                >
                  Create multiple accounts
                </a>
                <p className="text-left mt-4 dark:text-slate-400">
                  Create multiple accounts linked to one EOA, no need to
                  transfer gas to multiple wallets
                </p>
              </div>
            </div>

            <div
              class="px-3 p-10 sm:grid-cols-1 grid rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-darktext hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2"
              style={{ width: "50px", height: "40px" }}
            >
              <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                  ></path>
                </svg>
              </div>
              <div class="content text-left mt-6 p-3">
                <a
                  class="title h5 text-lg font-medium hover:text-blue-600 dark:text-white"
                  href="/index-course"
                >
                  Multiple User Control
                </a>
                <p className="text-left mt-4 dark:text-slate-400">
                  Add multiple authorities to the accounts and let your team
                  manage efficiently
                </p>
              </div>
            </div>

            <div
              class="px-3 p-10 sm:grid-cols-1 grid rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-darktext hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2"
              style={{ width: "50px", height: "40px" }}
            >
              <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-indigo-600 text-indigo-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                  ></path>
                </svg>
              </div>
              <div class="content text-left mt-6 p-3">
                <a
                  class="title h5 text-lg font-medium hover:text-blue-600 dark:text-white"
                  href="/index-course"
                >
                  Multiple protocol interactions
                </a>
                <p className="text-left mt-2 dark:text-slate-400">
                  Interact with multiple protocols easily and with our
                  technology batch and interact with them together
                </p>
              </div>
            </div>
          </Slider>
        </div>

        <div className="slider-container mt-100 p-20 ">
          <div className="items-center justify-center mb-4">
            <h1 className="font-semibold text-2xl text-center md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent md:text-left">
              Interact with multiple protocols
            </h1>
          </div>

          <Slider {...settings2}>
            <div
              class="px-3 p-10 sm:grid-cols-1 grid rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-darktext hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2"
              style={{ width: "50px", height: "40px" }}
            >
              <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                  ></path>
                </svg>
              </div>
              <div class="content text-left mt-6 p-3">
                <a
                  class="title h5 text-lg font-medium hover:text-blue-600 dark:text-white"
                  href="/index-course"
                >
                  Multiple accounts, multiple possibilities
                </a>
                <p className="text-left mt-4 dark:text-slate-400">
                  Using multiple accounts you can have multiple positions using
                  the same EOA
                </p>
              </div>
            </div>

            <div
              class="px-3 p-10 sm:grid-cols-1 grid rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-darktext hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2"
              style={{ width: "50px", height: "40px" }}
            >
              <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                  ></path>
                </svg>
              </div>
              <div class="content text-left mt-6 p-3">
                <a
                  class="title h5 text-lg font-medium hover:text-blue-600 dark:text-white"
                  href="/index-course"
                >
                  Why alternate frontend?
                </a>
                <p className="text-left mt-4 dark:text-slate-400">
                  Its not just a alternate frontend but also using proxy
                  contracts we can enable unique strategies like LEVERAGE,
                </p>
              </div>
            </div>

            <div
              class="px-3 p-10 sm:grid-cols-1 grid rounded-md shadow dark:shadow-gray-800 group text-center bg-white dark:bg-darktext hover:bg-indigo-600/5 dark:hover:bg-indigo-600/5 transition duration-500 m-2"
              style={{ width: "50px", height: "40px" }}
            >
              <div class="w-[84px] h-[84px] bg-indigo-600/5 group-hover:bg-blue-600 text-blue-600 group-hover:text-white rounded-full text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition duration-500 mx-auto">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="w-7 h-7"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L4 1.5V3.02746C4.16417 3.00932 4.331 3 4.5 3C4.669 3 4.83583 3.00932 5 3.02746V2H14V7H12.2929L11 8.29289V7H8.97254C8.99068 7.16417 9 7.331 9 7.5C9 7.669 8.99068 7.83583 8.97254 8H10V9.5L10.8536 9.85355L12.7071 8H14.5L15 7.5V1.5L14.5 1H4.5Z"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.41705 10.4288C7.37039 9.80348 8 8.72527 8 7.5C8 5.567 6.433 4 4.5 4C2.567 4 1 5.567 1 7.5C1 8.72527 1.62961 9.80348 2.58295 10.4288C2.11364 10.6498 1.68557 10.9505 1.31802 11.318C0.900156 11.7359 0.568688 12.232 0.342542 12.7779C0.180451 13.1692 0.0747425 13.5807 0.0278638 14C0.00933826 14.1657 0 14.3326 0 14.5V15H1L0.999398 14.5C0.999398 14.4784 0.999599 14.4567 1 14.4351C1.00811 13.9975 1.09823 13.5651 1.26587 13.1604C1.44179 12.7357 1.69964 12.3498 2.0247 12.0247C2.34976 11.6996 2.73566 11.4418 3.16038 11.2659C3.57088 11.0958 4.00986 11.0056 4.45387 10.9997C4.46922 10.9999 4.4846 11 4.5 11C4.5154 11 4.53078 10.9999 4.54613 10.9997C4.99014 11.0056 5.42912 11.0958 5.83962 11.2659C6.26433 11.4418 6.65024 11.6996 6.9753 12.0247C7.30036 12.3498 7.55821 12.7357 7.73413 13.1604C7.90177 13.5651 7.99189 13.9975 8 14.4351C8.0004 14.4567 8.0006 14.4784 8.0006 14.5L8 15H9V14.5C9 14.3326 8.99066 14.1657 8.97214 14C8.92526 13.5807 8.81955 13.1692 8.65746 12.7779C8.43131 12.232 8.09984 11.7359 7.68198 11.318C7.31443 10.9505 6.88636 10.6498 6.41705 10.4288ZM4.5 10C3.11929 10 2 8.88071 2 7.5C2 6.11929 3.11929 5 4.5 5C5.88071 5 7 6.11929 7 7.5C7 8.88071 5.88071 10 4.5 10Z"
                  ></path>
                </svg>
              </div>
              <div class="content text-left mt-6 p-3">
                <a
                  class="title h5 text-lg font-medium hover:text-blue-600 dark:text-white"
                  href="/index-course"
                >
                  Less fragmentation and more interoperability
                </a>
                <p className="text-left mt-2 dark:text-slate-400 overflow-hidden">
                  Improving discoverability and usage of protocols and also
                  enabling strategies
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="flex flex-col md:items-center mt-10 gap-5">
        <h1 className="font-semibold mb-5 text-2xl md:text-4xl text-darktext bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent sm:text-center items-center">
          Diffusion Vaults(Coming Soon)
        </h1>

        <div class="container relative sm:grid-cols-1 max-w-6xl">
          <div class="grid mx-12 lg:grid-rows-1 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 gap-4">
            <div
              class="group items-center cursor-pointer justify-center relative p-5 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center"
              id="card"
            >
              <div className="h-96 w-72">
                {/*HERE IMAGE CAN BE ADDED  */}
                <div
                  class="absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-white/40 group-hover:via-black/60 group-hover:to-black/70"
                  id="card__body"
                ></div>
                <div className="absolute inset-0 flex flex-col itens-center justify-center px-9 text-center translate-y-[47%] hover:text-white group-hover:translate-y-0 transition-all">
                  <div class="w-20 mb-5 h-20 bg-white group-hover:bg-white text-blue-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
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
                  <h1 className="text-2xl text-left mb-5 font-bold text-blue-600 group-hover:text-white dark:text-white ">
                    Strategy Management Layer
                  </h1>
                  <p className="text-lg text-left text-black dark:text-white mb-3 group-hover:text-white">
                    We are building strategy management layer that enables
                    strategy manager to create manual/automated strategies using
                    multiple protocols
                  </p>
                </div>
              </div>
            </div>

            <div
              class="group items-center cursor-pointer justify-center relative p-5 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out bg-blue-600 dark:bg-blue-600 overflow-hidden text-center"
              id="card"
            >
              <div className="h-96 w-72">
                <div
                  class="absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-white/40 group-hover:via-black/60 group-hover:to-black/70"
                  id="card__body"
                ></div>
                <div className="absolute inset-0 flex flex-col itens-center justify-center px-9 text-center translate-y-[38%] hover:text-white group-hover:translate-y-0 transition-all">
                  <div class="w-20 h-20 bg-white text-blue-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
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
                      <path
                        d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 
                        15 11 C 15 12.439 14.439 13 13 13 L 13 15 C 13.775751 15 14.436786 14.848831 15 14.587891 L 15 20 L 17 20 
                        L 17 11 L 15 11 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15
                        .5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="text-2xl mt-2 text-left mb-4 font-bold text-white group-hover:text-white dark:text-white ">
                    Logic Layer
                  </h1>
                  <p className="text-lg text-left text-black dark:text-white mb-3 group-hover:text-white">
                    In short, what you want to do on Defi in a single click
                  </p>
                </div>
              </div>
            </div>

            <div class="group items-center cursor-pointer justify-center relative p-5 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out bg-blue-600 dark:bg-blue-600 overflow-hidden text-center">
              <div className="h-96 w-56">
                <div
                  class="absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-white/40 group-hover:via-black/60 group-hover:to-black/70"
                  id="card__body"
                ></div>
                <div className="absolute inset-0 flex flex-col itens-center justify-center px-9 text-center translate-y-[43%] hover:text-white group-hover:translate-y-0 transition-all">
                  <div class="w-20 mb-5 h-20 bg-white text-blue-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
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
                      <path
                        d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 
                        15 11 C 15 12.439 14.439 13 13 13 L 13 15 C 13.775751 15 14.436786 14.848831 15 14.587891 L 15 20 L 17 20 
                        L 17 11 L 15 11 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15
                        .5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="text-2xl text-left mb-5 font-bold text-white group-hover:text-white dark:text-white ">
                    Execution Layer
                  </h1>
                  <p className="text-lg text-left text-black dark:text-white mb-3 group-hover:text-white">
                    Secret sauce, your strategy get checked and executed here
                    and enables you to use multiple protocols in one
                    transactions
                  </p>
                </div>
              </div>
            </div>

            <div class="group items-center cursor-pointer justify-center relative p-5 shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
              <div className="h-96 w-56">
                <div
                  class="absolute inset-0 bg-gradient-to-b from transparent via-transparent to-black group-hover:from-white/40 group-hover:via-black/60 group-hover:to-black/70"
                  id="card__body"
                ></div>
                <div className="absolute inset-0 flex flex-col itens-center justify-center px-9 text-center translate-y-[47%] hover:text-white group-hover:translate-y-0 transition-all">
                  <div class="w-20 mb-5 h-20 bg-white text-blue-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
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
                      <path
                        d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 
                        15 11 C 15 12.439 14.439 13 13 13 L 13 15 C 13.775751 15 14.436786 14.848831 15 14.587891 L 15 20 L 17 20 
                        L 17 11 L 15 11 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15
                        .5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"
                      ></path>
                    </svg>
                  </div>
                  <h1 className="text-2xl text-left text mb-5 font-bold text-blue-600 group-hover:text-white dark:text-white ">
                    Strategy Management Features
                  </h1>
                  <p className="text-lg text-left text-black dark:text-white mb-3 group-hover:text-white">
                    Custom share minting, Automated strategies support, Script
                    logic support, Accurate strategy insights, Multi asset
                    support and special deposit, withdraw and rebalance
                    mechanism
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="container relative max-w-5xl mt-10">
        <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3">
            <div class="group relative rounded-lg p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 16 3.875 L 15.5625 4.09375 L 5.5625 9 L 5 9.28125 L 5 11 L 27 11 L 27 9.28125 L 26.4375 9 L 16.4375 4.09375 Z M 16 6.125 L 21.875 9 L 10.125 9 Z M 7 12 L 7 22 L 6 22 L 6 24 L 26 24 L 26 22 L 25 22 L 25 12 L 23 12 L 23 22 L 21 22 L 21 12 L 19 12 L 19 22 L 17 22 L 17 12 L 15 12 L 15 22 L 13 22 L 13 12 L 11 12 L 11 22 L 9 22 L 9 12 Z M 4 25 L 4 27 L 28 27 L 28 25 Z"></path>
                    </svg>
                </div>
                <div class="mt-6">
                    <a class="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out" href="/index-law">Professional Court Service</a>
                    <p class="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                </div>
            </div>
            <div class="group relative p-6 bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out overflow-hidden text-center">
                <div class="w-20 h-20 bg-white text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-600 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 2 7 L 2 24 L 30 24 L 30 7 L 2 7 z M 6 9 L 26 9 C 26 10.105 26.895 11 28 11 L 28 20 C 26.895 20 26 20.895 26 22 L 6 22 C 6 20.895 5.105 20 4 20 L 4 11 C 5.105 11 6 10.105 6 9 z M 15 11 C 15 12.439 14.439 13 13 13 L 13 15 C 13.775751 15 14.436786 14.848831 15 14.587891 L 15 20 L 17 20 L 17 11 L 15 11 z M 8.5 14 C 7.672 14 7 14.672 7 15.5 C 7 16.328 7.672 17 8.5 17 C 9.328 17 10 16.328 10 15.5 C 10 14.672 9.328 14 8.5 14 z M 23.5 14 C 22.672 14 22 14.672 22 15.5 C 22 16.328 22.672 17 23.5 17 C 24.328 17 25 16.328 25 15.5 C 25 14.672 24.328 14 23.5 14 z"></path>
                    </svg>
                </div>
                <div class="mt-6">
                    <a class="text-lg font-medium text-white transition-all duration-500 ease-in-out" href="/index-law">Competitive Pricing</a>
                    <p class="text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                </div>
            </div>
            <div class="group relative p-6 hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-500 ease-in-out bg-white dark:bg-slate-900 overflow-hidden text-center">
                <div class="w-20 h-20 bg-indigo-600 group-hover:bg-white text-white group-hover:text-indigo-600 rounded-full text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 dark:group-hover:shadow-gray-700 mx-auto">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" class="h-7 w-7" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 16 3 C 15.375 3 14.753906 3.210938 14.21875 3.59375 L 12.5625 4.75 L 10.65625 5 L 10.625 5 L 10.59375 5.03125 C 9.320313 5.316406 8.316406 6.320313 8.03125 7.59375 L 8 7.625 L 8 7.65625 L 7.75 9.59375 L 6.59375 11.09375 L 6.5625 11.125 L 6.5625 11.15625 C 5.863281 12.273438 5.832031 13.714844 6.59375 14.78125 L 7.78125 16.4375 L 8.09375 18.15625 L 4.875 23.0625 L 3.84375 24.59375 L 8.625 24.59375 L 9.78125 27.28125 L 10.5 29 L 11.53125 27.4375 L 14.6875 22.6875 C 15.535156 23.035156 16.492188 23.066406 17.3125 22.6875 L 20.46875 27.4375 L 21.5 29 L 22.21875 27.28125 L 23.375 24.59375 L 28.15625 24.59375 L 27.125 23.0625 L 24 18.3125 L 24.25 16.4375 L 25.40625 14.78125 L 25.4375 14.75 L 25.4375 14.71875 C 26.136719 13.601563 26.167969 12.191406 25.40625 11.125 L 24.25 9.46875 L 23.875 7.59375 L 23.90625 7.59375 C 23.902344 7.570313 23.878906 7.554688 23.875 7.53125 C 23.695313 6.222656 22.660156 5.160156 21.34375 5 L 21.3125 5 L 19.4375 4.75 L 17.78125 3.59375 C 17.246094 3.210938 16.625 3 16 3 Z M 16 5.03125 C 16.230469 5.03125 16.457031 5.101563 16.625 5.21875 L 18.40625 6.5 L 18.625 6.65625 L 18.875 6.6875 L 21.0625 7 L 21.09375 7 C 21.542969 7.050781 21.855469 7.363281 21.90625 7.8125 L 21.90625 7.875 L 22.3125 10.09375 L 22.34375 10.3125 L 22.5 10.5 L 23.78125 12.28125 C 24.019531 12.613281 24.050781 13.175781 23.75 13.65625 L 22.34375 15.625 L 22.3125 15.875 L 22 18.0625 L 22 18.09375 C 21.980469 18.257813 21.925781 18.410156 21.84375 18.53125 L 21.78125 18.5625 L 21.78125 18.59375 C 21.636719 18.765625 21.4375 18.878906 21.1875 18.90625 L 21.125 18.90625 L 18.84375 19.3125 L 18.59375 19.34375 L 18.40625 19.5 L 16.625 20.78125 C 16.292969 21.019531 15.699219 21.050781 15.21875 20.75 L 13.59375 19.5 L 13.40625 19.34375 L 13.125 19.3125 L 10.9375 19 L 10.90625 19 C 10.597656 18.964844 10.359375 18.804688 10.21875 18.5625 C 10.15625 18.453125 10.109375 18.324219 10.09375 18.1875 L 10.09375 18.125 L 9.6875 15.84375 L 9.65625 15.59375 L 9.5 15.40625 L 8.21875 13.625 C 7.980469 13.292969 7.949219 12.699219 8.25 12.21875 L 9.5 10.59375 L 9.65625 10.40625 L 9.6875 10.125 L 9.96875 8.03125 C 9.972656 8.015625 9.996094 8.015625 10 8 C 10.125 7.511719 10.511719 7.125 11 7 C 11.015625 6.996094 11.015625 6.972656 11.03125 6.96875 L 13.125 6.6875 L 13.375 6.65625 L 13.59375 6.5 L 15.375 5.21875 C 15.542969 5.101563 15.769531 5.03125 16 5.03125 Z M 22.90625 20.25 L 24.4375 22.59375 L 22.03125 22.59375 L 21.78125 23.21875 L 21.09375 24.8125 L 18.96875 21.5625 L 19.4375 21.21875 L 21.40625 20.875 L 21.40625 20.90625 C 21.429688 20.902344 21.445313 20.878906 21.46875 20.875 C 22.007813 20.800781 22.496094 20.574219 22.90625 20.25 Z M 9.09375 20.28125 C 9.519531 20.664063 10.0625 20.929688 10.65625 21 C 10.667969 21 10.675781 21 10.6875 21 L 12.59375 21.25 L 13.03125 21.59375 L 10.90625 24.8125 L 10.21875 23.21875 L 9.96875 22.59375 L 7.5625 22.59375 Z"></path>
                    </svg>
                </div>
                <div class="mt-6">
                    <a class="text-lg font-medium group-hover:text-white transition-all duration-500 ease-in-out" href="/index-law">Top Expart Attorney</a>
                    <p class="text-slate-400 group-hover:text-white/75 transition-all duration-500 ease-in-out mt-3">Competently leverage existing enterprise wide niches through stand alone services. Quickly productize technically.</p>
                </div>
            </div>
        </div>
    </div> */}
        </div>
      </div>
    </section>
  );
}

export default Features;
