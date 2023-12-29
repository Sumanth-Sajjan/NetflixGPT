import React from "react";
import { IMG_CON_URL } from "../utils/constants";

export default function MovieCard({ posterPath }) {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CON_URL + posterPath} alt="" />
    </div>
  );
}
