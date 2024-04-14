import React, { useEffect, useState } from "react";

const Gallary = () => {
    const galleryItems = [
        {
            id: 1,
            img: "/about-food.jpg",
            title: "Dessert",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 2,
            img: "/about-food2.jpg",
            title: "Food",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 3,
            img: "/h1.jpg",
            title: "Food",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 4,
            img: "/h2.jpg",
            title: "Drink",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 5,
            img: "/about-food.jpg",
            title: "Drink",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 6,
            img: "/about-food2.jpg",
            title: "Dessert",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 7,
            img: "/h1.jpg",
            title: "Drink",
            description: "Lorem ipsum dolor.",
        },
        {
            id: 8,
            img: "/h2.jpg",
            title: "Food",
            description: "Lorem ipsum dolor.",
        },
    ];

    const [gallery, setGallery] = React.useState(galleryItems);
    const [selectedGalleryItem, setselectedGalleryItem] = useState("All");
 useEffect(()=>{
    if(selectedGalleryItem === "All"){
        setGallery(galleryItems)
        return
    }
setGallery(galleryItems.filter((item)=>item.title === selectedGalleryItem))
 },[selectedGalleryItem])
    return (
        <div className="  flex justify-center items-center py-11 ">
            <div className="w-full">
                <div className="text-center   px-72   m-auto flex justify-center flex-col gap-3">
                    <h2 className="text-4xl">Our Gallary</h2>
                    <div className="w-8 h-1 bg-yellow-300 m-auto  rounded-md"></div>
                    <p
                        style={{ lineHeight: "20px" }}
                        className="text-center text-sm text-gray-500"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className=" flex gap-4 items-center justify-center mt-7">
                    {selectedGalleryItem === "All" ? (
                        <span  className="text-yellow-400 hover:cursor-pointer">All</span>
                    ) : (
                        <span
                            onClick={() => setselectedGalleryItem("All")}
                            className="text-slate-400 hover:cursor-pointer"
                        >
                            All
                        </span>
                    )}
                    <span className="text-slate-400 hover:cursor-pointer">/</span>{" "}
                    {selectedGalleryItem === "Food" ? (
                        <span className="text-yellow-400 hover:cursor-pointer">Food</span>
                    ) : (
                        <span
                            onClick={() => setselectedGalleryItem("Food")}
                            className="text-slate-400 hover:cursor-pointer"
                        >
                            Food
                        </span>
                    )}
                    <span className="text-slate-400 hover:cursor-pointer">/</span>{" "}
                    {selectedGalleryItem === "Drink" ? (
                        <span className="text-yellow-400 hover:cursor-pointer">Drink</span>
                    ) : (
                        <span
                            onClick={() => setselectedGalleryItem("Drink")}
                            className="text-slate-400 hover:cursor-pointer"
                        >
                            Drink
                        </span>
                    )}
                    <span className="text-slate-400 hover:cursor-pointer">/</span>{" "}
                    {selectedGalleryItem === "Dessert" ? (
                        <span className="text-yellow-400 hover:cursor-pointer">Dessert</span>
                    ) : (
                        <span
                            onClick={() => setselectedGalleryItem("Dessert")}
                            className="text-slate-400 hover:cursor-pointer"
                        >
                            Dessert
                        </span>
                    )}
                </div>
                <div className="grid grid-cols-4 mt-9  overflow-hidden">
                    {gallery.map((item) => (
                        <div className=" relative h-[400px]">
                            <img
                                src={item.img}
                                className="h-full w-full object-cover transform  "
                                alt=""
                            />
                            <div
                                className="absolute inset-0  opacity-0 transition-opacity duration-300 flex flex-col items-center justify-center  hover:opacity-80"
                                style={{ backgroundColor: "#3e3b3e" }}
                            >
                                <span className="text-yellow-400 text-2xl font-medium">
                                    {item.title}
                                </span>
                                <span className="italic text-white">{item.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallary;
