import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

export default function GPTSearchBar() {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 h-30 grid grid-cols-12 absolute ">
        <input
          type="text"
          className="p-4 m-4 col-span-9 bg-black text-white rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className="bg-red-700 m-4 py-2  text-white col-span-3 rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}
