import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

export const PopularLocalities = () => {
  const LocalitiesCard = (props) => {
    return (
      <div className="w-full border shadow-md rounded-md">
        <div className="p-2 flex items-center justify-between">
          <div>
            <h1 className="text-xl">{props.location}</h1>
            <p className="text-lg text-gray-600 py-1">
              {props.noPlaces} Places
            </p>
          </div>
          <FaChevronRight size={14} />
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">Popular localities in and around Salem</h1>
        <div className="py-8 grid grid-cols-3 gap-4">
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <LocalitiesCard location="Alagapuram Pudur" noPlaces="280" />
          <div className="w-full border shadow-md rounded-md flex justify-center items-center">
            <div className="flex items-center text-xl gap-2">
            <p>See more</p>
            <FaAngleDown size={16}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
