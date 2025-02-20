"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { blogs } from "@/data"; // ✅ Importing from index.ts

const RecentBlogs = () => {
  return (
    <div id="blogs" className="py-20 relative">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">My Recent Blogs</span>
      </h1>

      {/* Flex container with horizontal scrolling */}
      <div className="flex flex-nowrap items-center justify-center gap-8 mt-10 overflow-x-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="lg:min-h-[24rem] h-[20rem] flex items-center justify-center sm:w-80 w-[90vw]"
          >
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/[0.1]">
                {/* Background Image */}
                <img
                  src={blog.bgImg}
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-[#10132E] opacity-80"></div>
                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="font-bold lg:text-2xl md:text-xl text-base text-white break-words">
                      {blog.title}
                    </h2>
                    <p
                      className="lg:text-xl lg:font-normal font-light text-sm mt-4"
                      style={{ color: "#BEC1DD" }}
                    >
                      {blog.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <span className="lg:text-xl md:text-xs text-sm text-purple">
                      Read More
                    </span>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
