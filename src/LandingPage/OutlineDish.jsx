import React from "react";

export const OutlineDish = () => {
  const DishCard = (props) => {
    console.log(props);
    return (
      <div className="w-full cursor-pointer hover:scale-105 transition-all rounded-lg overflow-hidden border">
        <img
          src={props.thumbnail}
          alt=""
          className="w-full h-[150px] object-cover"
        />
        <div className="py-2 px-4">
          <h3 className="text-2xl">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container grid grid-cols-2 py-8 gap-4">
      <DishCard
        thumbnail={
          "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
        }
        title={"Order Online"}
        description={"Stay home and order to your doorstep"}
      />
      <DishCard
        thumbnail={
          "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*"
        }
        title={"Dining"}
        description={"View the city's favourite dining venues"}
      />
    </div>
  );
};
