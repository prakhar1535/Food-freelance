import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center lg:px-72 px-5 py-11 lg:flex-row">
      <div>
        <div className="text-center  lg:w-[60%] w-[100%]  m-auto flex justify-center flex-col gap-3">
          <h2 className="text-4xl">Discover Our Story</h2>
          <div className="w-5 h-1 bg-yellow-300 m-auto  rounded-md"></div>
          <p
            style={{ lineHeight: "20px" }}
            className="text-center text-sm text-gray-500"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            perferendis cum praesentium similique ipsum. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="flex gap-12 mt-16 justify-center lg:flex-row flex-col items-center">
          <div className="flex justify-center items-center gap-2">
            <img
              className="h-[300px] w-[250px] object-cover"
              src="/staff.jpg"
              alt="staff"
            />
            <img
              className="h-[400px] w-[300px] object-cover"
              src="/staff2.jpg"
              alt="staff"
            />
          </div>
          <div className="flex flex-col gap-3  w-[100%] lg:max-w-[40%]">
            <h3 className="text-3xl">Our History</h3>
            <p
              style={{ lineHeight: "20px" }}
              className="text-sm text-gray-500  "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, eligendi?dolor sit amet, consectetur adipisicing elit.
              Quibusdam, eligendi?
            </p>
            <img
              className="h-[100px] w-[100px] object-cover"
              src="/signature.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex lg:flex-row-reverse flex-col-reverse  gap-12 mt-16 justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <img
              className="h-[300px] w-[300px] object-cover"
              src="/about-food.jpg"
              alt="staff"
            />
            <img
              className="h-[400px] w-[300px] object-cover"
              src="/about-food2.jpg"
              alt="staff"
            />
          </div>
          <div className="flex flex-col lg:gap-3 gap-6 w-[100%] lg:max-w-[40%]">
            <h3 className="text-3xl">Our Restorans</h3>
            <p
              style={{ lineHeight: "20px" }}
              className="text-sm text-gray-500 "
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, eligendi?dolor sit amet, consectetur adipisicing elit.
              Quibusdam, eligendi?
            </p>
            <p style={{ lineHeight: "20px" }} className="text-sm text-black ">
              If you have any questions, we are here to support you 24/7. We do
              our best to make your life happier and easier! See you soon!
            </p>
            <div className="flex gap-6">
              <div>
                <div className="text-sm text-yellow-500">
                  Monday <span className="mx-1">—</span> Thursday
                </div>
                <div className="text-sm">
                  8 am <span className="mx-1">—</span> 11 pm
                </div>
              </div>
              <div>
                <div className="text-sm text-yellow-500">
                  Friday <span className="mx-1">—</span> Sunday
                </div>
                <div className="text-sm">
                  11 am <span className="mx-1">—</span> 11 pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
