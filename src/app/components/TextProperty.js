"use client";
import React, { useState } from "react";

function TextProperty({ showContents, content }) {
  return (
    <div
      className="bg-[#f3f5f8] w-[30%] h-full absolute left-0 p-5 border-l overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex gap-5 border-b pb-5"  onClick={() => showContents()}>
        <img
          src="/arrow-back.svg"
          width={17}
          height={17}
         
        />
        <label className="text-xl font-semibold">Text</label>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center border-b py-5">
          <label className="text-base font-medium w-[60%]">Font Family</label>
          <select className="p-2 rounded-full outline-none">
            <option>Arial</option>
            <option>Roboto</option>
            <option>Mono</option>
            <option>Sans serif</option>
          </select>
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">Font Weight</label>
          <input
            type="text"
            placeholder="500"
            className="py-2 px-6 rounded-full outline-none w-[20%]"
          />
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">Font Size</label>
          <input
            type="text"
            placeholder="16"
            className="py-2 px-5 rounded-full outline-none w-[15%]"
          />
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">Text Color</label>
          <input
            type="text"
            placeholder="#000000"
            className="py-2 px-4 rounded-full outline-none w-[30%]"
          />
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">
            Background Color
          </label>
          <input
            type="text"
            placeholder="#000000"
            className="py-2 px-4 rounded-full outline-none w-[30%]"
          />
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">Alignment</label>
          <div className="flex gap-2">
            <button className="bg-white border-2 rounded-[5px] p-2">
              <img src="/left-align.svg" width={20} height={20} />
            </button>
            <button className="bg-[#ddd8d8] border-2 rounded-[5px] p-2">
              <img src="/center-align.svg" width={20} height={20} />
            </button>
            <button className="bg-white border-2 rounded-[5px] p-2">
              <img src="/right-align.svg" width={20} height={20} />
            </button>
            <button className="bg-white border-2 rounded-[5px] p-2">
              <img src="/justify-align.svg" width={20} height={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">Line Height</label>
          <input
            type="text"
            placeholder="16"
            className="py-2 px-5 rounded-full outline-none w-[15%]"
          />
        </div>

        <div className="flex items-center border-b pb-5">
          <label className="text-base font-medium w-[60%]">
            Container Padding
          </label>
          <input
            type="text"
            placeholder="16"
            className="py-2 px-5 rounded-full outline-none w-[15%]"
          />
        </div>
      </div>
    </div>
  );
}

export default TextProperty;
