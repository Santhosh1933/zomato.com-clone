import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

export const AppDownload = () => {
  return (
    <div className="my-16 bg-[#fffbf7] py-16 flex items-center justify-center">
      <div className="flex ">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt=""
          className="w-[250px] "
        />
        <div>
          <h1 className="text-5xl font-medium">Get the Zomato app</h1>
          <p className="py-4">
            We will send you a link, open it on your phone to download the app
          </p>
          <RadioGroup defaultValue="phone" className="pb-4">
            <Stack spacing={5} direction="row">
              <Radio size="md" colorScheme="red" value="email">
                Email
              </Radio>
              <Radio size="md" colorScheme="red" value="phone">
                Phone
              </Radio>
            </Stack>
          </RadioGroup>
          <div className="flex gap-2">
            <div className="flex items-center border rounded-md py-3 px-4 bg-white">
              <p className="flex items-center border-r pr-2">
                +91 <FaAngleDown size={14} />
              </p>
              <input
                type="text"
                placeholder="Type here..."
                className="px-2 cursor-pointer outline-none"
              />
            </div>
            <button className="bg-[#ef4f5f] px-4 rounded-md text-white">
              Share App Link
            </button>
          </div>
          <div className="py-4">
            <h1>Download App from</h1>
            <div className="py-4 flex items-center gap-4">
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt=""
                className="w-[130px]"
              />
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt=""
                className="w-[130px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
