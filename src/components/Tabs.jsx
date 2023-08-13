"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const Tabs = () => {
  const genre = useSearchParams().get("genre");

  const tabs = [
    {
      name: "Popular",
      url: "popular",
    },
    {
      name: "Latest",
      url: "latest",
    },
    {
      name: "Upcoming",
      url: "upcoming",
    },
  ];

  return (
    <div className="p-5 my-3 bg-gray-100 dark:bg-gray-900 flex justify-center items-center gap-x-5 font-semibold text-xl ">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          href={`/?genre=${tab.url}`}
          className={`hover:opacity-75 transition-opacity ${genre === tab.url ? "underline text-amber-600 underline-offset-8" : ""}`}
        >
          {" "}
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
