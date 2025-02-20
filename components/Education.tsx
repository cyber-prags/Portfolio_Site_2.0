"use client";

import React from "react";
import { educationTimeline } from "@/data";
import { Button } from "./ui/MovingBorders"; // Import MovingBorders
import { Timeline } from "@/components/ui/Timeline"; // Keep the Timeline component

const Education = () => {
  return (
    <div className="py-20 w-full relative">
      <h1 className="heading">
        My <span className="text-purple">Educational </span> Journey
      </h1>

      {/* Timeline Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-12">
        <Timeline
          data={educationTimeline.map((entry) => ({
            title: entry.title,
            content: (
              <p className="text-neutral-300 text-sm md:text-base">
                {entry.content}
              </p>
            ),
          }))}
        />
      </div>

      {/* Card-Based Education Display */}
      <div className="w-full mt-16 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {educationTimeline.map((entry, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {entry.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {entry.content}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Education;
