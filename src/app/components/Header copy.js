"use client";
import React from "react";

function Header({ handleUndo, handleRedo }) {
  
  return (
    <>
      <div className="w-full bg-[#f3f5f8] p-5 flex border-b">
        <div className="flex w-[20%]">
          <button className="bg-white border py-2 px-3 flex justify-start items-center gap-2 rounded-full text-sm font-normal">
            <img src="/arrow-back.svg" width={20} height={20} />
            Back
          </button>
        </div>
        <div className="flex gap-3 w-full justify-center">
          <button className="bg-white border py-2 px-3 rounded-full text-sm font-normal">
            Choose template
          </button>
          <button
            className="bg-white border px-3.5 rounded-full"
            onClick={handleUndo}
          >
            <img src="/undo.svg" width={20} height={20} />
          </button>
          <button
            className="bg-white border px-3.5 rounded-full"
            onClick={handleRedo}
          >
            <img src="/redo.svg" width={20} height={20} />
          </button>
          <button className="bg-white border px-3 rounded-full">
            <img src="/preview.svg" width={25} height={25} />
          </button>
        </div>
        <div className="flex gap-3 w-full justify-center">
          <button className="bg-white border p-3 flex justify-start items-center gap-1 rounded-full text-sm font-normal">
            <img src="/send.svg" width={17} height={17} />
            Send
          </button>
          <button className="bg-white border p-3 flex justify-start items-center gap-1 rounded-full text-sm font-normal">
            <img src="/export.svg" width={20} height={20} />
            Export
          </button>
        </div>
        <div className="flex gap-3 w-full justify-center">
          <button className="bg-white border px-3 rounded-full">
            <img src="/code.svg" width={25} height={25} />
          </button>
          <button className="bg-white border px-3 rounded-full">
            <img src="/setting.svg" width={25} height={25} />
          </button>
          <button className="bg-white border px-2.5 rounded-full">
            <img src="/responsive.svg" width={30} height={30} />
          </button>
        </div>
        <div className="flex w-[20%]">
          <button className="bg-white border py-2 px-3 rounded-full text-sm font-normal">
            Sigin In
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
