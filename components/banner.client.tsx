"use client";
import React from "react";

export default function Banner() {
  const handleOnclick = () => {
    console.log("VIEW STORES");
  };
  return (
    <div className="mb-12 grid lg:mb-24 lg:grid-cols-2">
      <div className="z-20 flex flex-col px-2 md:pt-12">
        <h1 className="my-2 flex-wrap">Snacky Time</h1>
        <p className="text-xl font-semibold text-gray-900 md:mt-5 lg:text-2xl">
          Know your snacking points..
        </p>
        <div className="mt-12">
          <button onClick={handleOnclick}>View stores nearby</button>
        </div>
      </div>
    </div>
  );
}
