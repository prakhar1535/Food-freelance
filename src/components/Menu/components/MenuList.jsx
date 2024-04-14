import React from "react";

const MenuList = () => {
  return (
    <div className="mt-20 " >
      <div className="flex justify-between items-center border-t border-l border-r w-2/5 mx-auto ">
        <button className="p-4 w-32 bg-yellow-400 border text-white font-semibold">
          Lunch
        </button>
        <button className="p-4 w-32 bg-yellow-400 border text-white font-semibold">
          Dinner
        </button>
        <button className="p-4 w-32 bg-yellow-400 border text-white font-semibold">
          Desert
        </button>
        <button className="p-4 w-32 bg-yellow-400 border text-white font-semibold">
          Drink
        </button>
      </div>
      <div
        className=" h-[60vh] py-4 px-16 grid grid-cols-2 gap-1 border shadow-xl "
        style={{ placeItems: "center" }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
          <>
            <div>
              <div
                key={e}
                className="flex  items-center    h-fit gap-8"
                style={{ width: "calc( 100%)" }}
              >
                <div className="h-16 w-16 ">
                  <img
                    className="h-full w-full object-cover rounded-full"
                    src="/h1.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <h2>sdfsdf</h2>
                    <h2>$20.15</h2>
                  </div>
                  <p className="text-slate-500 text-sm">
                    Mint parsley with apple cider vinegar, salt, sugar & spices
                  </p>
                </div>
              </div>
              {e!==7 && e!==8 ?    <div className="w-full h-[0.1px] opacity-15 bg-black mt-2"></div>:''}
    
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
