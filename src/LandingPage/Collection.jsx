import React from "react";
import { FaCaretRight } from "react-icons/fa";

export const Collection = () => {
  const CollectionCard = (props) => {
    return (
      <div className="w-full cursor-pointer h-[300px] rounded-lg overflow-hidden relative">
        <img src={props.img} alt="" className="w-full h-full object-cover " />
        <div className="absolute bottom-0 text-white p-4 text-lg">
          <h1>{props.title}</h1>
          <div className="flex items-center ">
            <p>{props.noPlace} Places</p>
            <FaCaretRight />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-12">
      <div>
        <h1 className="title">Collections</h1>
        <div className="flex justify-between py-2">
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Salem, based on trends
          </p>
          <div className="flex gap-2 items-center text-red-500 cursor-pointer hover:text-red-400">
            <p>All collections in Salem</p>
            <FaCaretRight />
          </div>
        </div>
        <div className="grid grid-cols-4 py-6 gap-4">
          <CollectionCard
            img={
              "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png"
            }
            title={"Brilliant Biryanis"}
            noPlace={"5"}
          />
          
        </div>
      </div>
    </div>
  );
};
