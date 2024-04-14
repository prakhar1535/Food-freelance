import React from "react";

const Reservation = () => {
  return (
    <div className=" bg-zinc-900 mt-16   ">
      <div className="flex  h-[70vh]">
        <div className=" pl-[15%] h-full mt-[8%] flex-1">
          <div className=" w-3/5 flex flex-col   gap-4  ">
            <h2 className="text-4xl text-white">Make Reservation</h2>
            <div className="w-9 h-1 bg-yellow-300   rounded-md"></div>
            <p
              style={{ lineHeight: "20px" }}
              className=" text-sm text-gray-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              perferendis cum praesentium similique ipsum. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit.
            </p>
          </div>

          <form className=" w-4/6 mt-3">
            <label htmlFor="name" className="text-sm text-white block mb-1">
              Name
            </label>
            <input placeholder="Name" className="p-2 pl-4 border w-full mb-2" />
            <label htmlFor="date" className="text-sm text-white block mb-1">
              Date:
            </label>
            <input
              id="date"
              placeholder="Date"
              type="date"
              className="p-2 pl-4 border w-full mb-2"
            />
            <div className="flex gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-white block mb-1"
                >
                  Name
                </label>
                <input
                  placeholder="Name"
                  className="p-2 pl-4 border w-full mb-2"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="text-sm text-white block mb-1"
                >
                  Name
                </label>
                <input
                  placeholder="Name"
                  className="p-2 pl-4  w-full mb-2"
                />
              </div>
            </div>
          </form>
        </div>
        <div className=" flex-3 ">
            <img className="h-full w-full object-cover" src="/staff.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
