"use client";
import React from "react";

function Header() {
  
  return (
    <>
      <div className="w-full bg-[#f3f5f8] p-5 flex border-b justify-between">
        <div className="flex">
          <button className="bg-white border py-2 px-3 flex justify-start items-center gap-2 rounded-full text-base font-medium">
            <img src="/arrow-back.svg" width={18} height={18} />
            Back
          </button>
        </div>
      
        <div className="flex gap-3">
          {/* <button className="bg-white border px-3 rounded-full">
            <img src="/code.svg" width={25} height={25} />
          </button> */}
          <button className="bg-white border px-3 rounded-full flex gap-2 items-center">
            <img src="/preview.svg" width={25} height={25} />
            <label className="text-base font-medium">Preview</label>
          </button>
          <button className="bg-white border px-3 rounded-full flex gap-2 items-center">
            <img src="/setting.svg" width={25} height={25} />
            <label className="text-base font-medium">Setting</label>
          </button>
          {/* <button className="bg-white border px-2.5 rounded-full">
            <img src="/responsive.svg" width={30} height={30} />
          </button> */}
        </div>
        
      </div>
    </>
  );
}

export default Header;
