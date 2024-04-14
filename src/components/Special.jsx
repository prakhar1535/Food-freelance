import React from "react";

const Special = () => {
  return (
    <div className=" border border-black  flex  px-72   min-h-screen max-h-fit p-8" style={{ backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center" }}>
      <div className="w-full mt-10" >
        <div className="text-center   w-[600px] mx-auto  flex  flex-col gap-3">
          <h2 className="text-4xl">Today's Special</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4  mt-16">
          <div className=" h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="/about-food.jpg"
              alt=""
            />
          </div>
          <div style={{transition:'ease-in',  transitionDuration:'.1s'}} className="group bg-white   hover:bg-yellow-500 h-[300px] flex  items-center">
            <div className="flex flex-col gap-4 justify-center items-center  px-12 ">
                <h3 className="text-xl ">Campo Chicken</h3>
                <p className="text-md text-slate-500 group-hover:text-white">Lorem ipsum dolor sit amet id id adipisicing elit  ipsum dolor dolor</p>
                <span className="text-2xl text-yellow-500 group-hover:text-white">$20.15</span>
                <span className="italic">in Dinners</span>
            </div>
          </div>
          <div className=" h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="/about-food.jpg"
              alt=""
            />
          </div>
          <div style={{transition:'ease-in',  transitionDuration:'.1s'}} className="group bg-white   hover:bg-yellow-500 h-[300px] flex  items-center">
            <div className="flex flex-col gap-4 justify-center items-center  px-12 ">
                <h3 className="text-xl ">Campo Chicken</h3>
                <p className="text-md text-slate-500 group-hover:text-white">Lorem ipsum dolor sit amet id id adipisicing elit  ipsum dolor dolor</p>
                <span className="text-2xl text-yellow-500 group-hover:text-white">$20.15</span>
                <span className="italic">in Dinners</span>
            </div>
          </div>
          <div style={{transition:'ease-in',  transitionDuration:'.1s'}} className="group  bg-white   hover:bg-yellow-500 h-[300px] flex  items-center">
            <div className="flex flex-col gap-4 justify-center items-center  px-12 ">
                <h3 className="text-xl ">Campo Chicken</h3>
                <p className="text-md text-slate-500 group-hover:text-white">Lorem ipsum dolor sit amet id id adipisicing elit  ipsum dolor dolor</p>
                <span className="text-2xl text-yellow-500 group-hover:text-white">$20.15</span>
                <span className="italic">in Dinners</span>
            </div>
          </div>
          <div className=" h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="/about-food.jpg"
              alt=""
            />
          </div>
          <div style={{transition:'ease-in',  transitionDuration:'.1s'}} className="group bg-white   border hover:bg-yellow-500 border-red-500 h-[300px] flex  items-center">
            <div className="flex flex-col gap-4 justify-center items-center  px-12 ">
                <h3 className="text-xl ">Campo Chicken</h3>
                <p className="text-md text-slate-500 group-hover:text-white">Lorem ipsum dolor sit amet id id adipisicing elit  ipsum dolor dolor</p>
                <span className="text-2xl text-yellow-500 group-hover:text-white">$20.15</span>
                <span className="italic">in Dinners</span>
            </div>
          </div>
          <div className="border border-green-500 h-[300px]">
            <img
              className="w-full h-full object-cover"
              src="/about-food.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
