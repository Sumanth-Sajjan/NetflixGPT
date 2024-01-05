import React from "react";
import { BG_Image } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

export default function GPTSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_Image} alt="Background Image" />
      </div>
      <GPTSearchBar />
    </div>
  );
}
