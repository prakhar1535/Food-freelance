import React from "react";
import MenuList from "./components/MenuList";

const Menu = () => {
  return (
    <div className="  flex justify-center items-center px-96 py-11 ">
      <div className=" w-full">
        <div className="text-center  w-[600px] m-auto flex justify-center flex-col gap-3">
          <h2 className="text-4xl">Our Menu</h2>
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
        <MenuList/>
      </div>
    </div>
  );
};

export default Menu;
