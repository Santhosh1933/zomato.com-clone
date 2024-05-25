import React from "react";
import { Navbar } from "./Navbar";
import { HeroPage } from "./HeroPage";
import { OutlineDish } from "./OutlineDish";
import { Collection } from "./Collection";
import { PopularLocalities } from "./PopularLocalities";
import { AppDownload } from "./AppDownload";
import { Explore } from "./Explore";
import { Footer } from "./Footer";

export const LandingPageIndex = () => {
  return (
    <div className="">
      <HeroPage />
      <OutlineDish />
      <Collection />
      <PopularLocalities />
      <AppDownload />
      <Explore />
      <Footer />
    </div>
  );
};
