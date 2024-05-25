import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
export const Explore = () => {
  const ExploreCard = (props) => {
    return (
      <div className="">
        <Accordion
          defaultIndex={[0]}
          allowMultiple
          className="flex flex-col gap-4"
        >
          {props.options.map((data, index) => (
            <AccordionItem key={index} className="border rounded-lg shadow-sm">
              <h2>
                <AccordionButton className="flex justify-between ">
                  <h1 className=" text-xl py-2">{data.title}</h1>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="text-gray-600">{data.description}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  };

  return (
    <div className="container">
      <div>
        <h1 className="title">Explore options near me</h1>
        <div className="py-8 ">
          <ExploreCard
            options={[
              {
                title: "Popular cuisines near me",
                description:
                  "Arabian food near meBBQ food near meBakery food near meBeverages food near meBiryani food near meBurger food near meChettinad food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me",
              },
              {
                title: "Popular cuisines near me",
                description:
                  "Arabian food near meBBQ food near meBakery food near meBeverages food near meBiryani food near meBurger food near meChettinad food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me",
              },
              {
                title: "Popular cuisines near me",
                description:
                  "Arabian food near meBBQ food near meBakery food near meBeverages food near meBiryani food near meBurger food near meChettinad food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me",
              },
              {
                title: "Popular cuisines near me",
                description:
                  "Arabian food near meBBQ food near meBakery food near meBeverages food near meBiryani food near meBurger food near meChettinad food near meChinese food near meDesserts food near meIce Cream food near meJuices food near meMughlai food near meNorth Indian food near mePizza food near meSandwich food near meSeafood food near meShake food near meSichuan food near meSouth Indian food near meStreet food near me",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
