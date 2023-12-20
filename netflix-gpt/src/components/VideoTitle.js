import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-r from black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <h1 className="py-6 text-lg w-2/4">{overview}</h1>
      <button className="bg-black text-white p-4 px-14 text-lg rounded-lg">
        Play
      </button>
      <button className="mx-2 bg-black text-white p-4 px-14 text-lg rounded-lg">
        More Info
      </button>
    </div>
  );
}
