import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";

const GetInTouch = () => {
  const contactIcons = [
    <CiFacebook />,
    <FaGoogle />,
    <FaLinkedinIn />,
    <FaTwitter />,
    <FaReddit />,
  ];
  return (
    <>
      <div className="w-full py-[5%] px-[15%] flex-col gap align-center justify-center relative backdrop-opacity-50 bg-black">
        <img
          src="/get-in-touch-bg.jpg"
          className="absolute -z-40 top-0 left-0 w-full h-full object-cover opacity-40"
          alt=""
        />
        <div className="flex flex-col items-center mb-[70px]">
          <h1 className="text-4xl text-white pb-5">Get in touch</h1>
          <div className="p-[0.5px] w-[30px] h-1 bg-yellow-500 mb-5"></div>
          <div className="text-[15px] text-white">
            Sed arcu. Cras consequat.
          </div>
        </div>
        <div className="flex justify-between ">
          <div className="flex flex-col gap-6 items-center max-w-60">
            <h2 className="text-[30px] text-center text-white">Contact Us</h2>
            <div className="text-[15px] text-white w-[100%] text-center">
              732/21 Second Street, Manchester, King Street, Kingston United
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-[15px] text-yellow-500">
                + 123 4567-32-21
              </div>
              <div className="text-[15px] text-yellow-500">
                + 123 9876-54-43
              </div>
            </div>
            <div className="text-[15px] text-white">info@mail.com</div>
            <div className="flex gap-[10px]">{contactIcons}</div>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <h2 className="text-[30px] text-center text-white">Open hours</h2>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-[15px] text-yellow-500">
                Monday - Thursday
              </div>
              <div className="text-[15px] text-white">8am - 11pm</div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="text-[15px] text-yellow-500">Friday - Sunday</div>
              <div className="text-[15px] text-white">11am - 11pm</div>
            </div>
            <div className="text-[15px] text-white">
              Note: Restraunt is closed on holidays
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[20%] items-center mr-12">
            <h2 className="text-[30px] text-center text-white">Say Hello!</h2>
            <input
              type="text"
              className="px-[20px] py-[11px] text-[12px] w-[100%]"
              placeholder="Name"
            />
            <input
              type="text"
              className="px-[20px] py-[11px] text-[12px] w-[100%]"
              placeholder="Email"
            />
            <textarea
              type="text"
              className="px-[20px] py-[11px] text-[12px] w-[100%] h-[80px]"
              placeholder="*Message*"
            />
            <button className="border border-white bg-transparent px-[40px] py-[10px] text-[12px] rounded-[6px] hover:bg-yellow-500 hover:text-white transition-all duration-400 ease-in">
              Send Mesaage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
