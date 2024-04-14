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
    <div className=" h-[80vh]   py-11  " style={{ backgroundColor: "#38363b" }}>
      <div className="text-center   px-48   m-auto flex justify-center flex-col gap-3">
        <h2 className="text-4xl text-white">Our Gallary</h2>
        <div className="w-8 h-1 bg-yellow-300 m-auto  rounded-md"></div>
        <p
          style={{ lineHeight: "20px" }}
          className="text-center text-sm text-gray-300"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* <div className="grid grid-cols-3"> */}
      <div
        className=" px-72 border border-red-500 grid grid-cols-3"
        style={{ placeItems: "center" ,justifyContent:'center',alignItems:'center' }}
      >
        <div className="border border-blue-600">
          <div>
            <h3 className="text-white">Contact Info</h3>
            <p className="text-slate-300">
              732/21 Second Street, Manchester, King Street, Kingston United
            </p>
            <span className="text-yellow-600">+ 123 4567-32-21</span>
            <span className="text-yellow-600">+ 123 9876-54-43</span>
            <p className="text-slate-300">info@mail.com</p>
          </div>
          <ul className="flex gap-4">
            {contactIcons.map((icon) => (
              <div className="text-white hover:cursor-pointer">{icon}</div>
            ))}
          </ul>
        </div>
        <div className="border border-blue-600">
          <div>
            <h3 className="text-white">Contact Info</h3>
            <p className="text-slate-300">
              732/21 Second Street, Manchester, King Street, Kingston United
            </p>
            <div>
              <div className="text-sm text-yellow-500">
                Monday <span className="mx-1">—</span> Thursday
              </div>
              <div className="text-sm text-white">
                8 am <span className="mx-1 text-white">—</span> 11 pm
              </div>
            </div>
            <div>
              <div className="text-sm text-yellow-500">
                Friday <span className="mx-1">—</span> Sunday
              </div>
              <div className="text-sm text-white">
                11 am <span className="mx-1 text-white">—</span> 11 pm
              </div>
            </div>
            <p className="text-slate-300">info@mail.com</p>
          </div>
        </div>
        <div className="border border-blue-600 w-full">
          <div className="border border-red-500 flex flex-col gap-3">
            <h3 className="text-white text-center text-xl" >Say Hello!</h3>

            <input
              type="text"
              placeholder="Name*"
              className="pl-4 text-sm p-2 w-full"
              name=""
              id=""
            />
             <input
              type="text"
              placeholder="Email*"
              className="pl-4 text-sm p-2 w-full"
              name=""
              id=""
            />
            <textarea name="Message" placeholder="Message*" className="max-w-full max-h-80"></textarea>
            <button className="bg-transparent border border-slate-500 w-40 text-slate-400 hover:bg-yellow-400 px-6">Send Message</button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GetInTouch;
