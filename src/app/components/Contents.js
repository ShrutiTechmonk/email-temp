import React, { useState } from "react";
import Blocks from "./Blocks";

function Contents({ showTextProperties, showHeadingProperties, showBlocks }) {
  const [showBlock, setShowBlocks] = useState(false);
  const [showContents, setShowContents] = useState(false)
  const ShowBlocks = () => {
    setShowBlocks(true);
    setShowContents(false)
  }
  const ShowContents = () => {
    setShowContents(true)
    setShowBlocks(false);
  }

  const contentItems = [
    // { id: 0, type: "Blocks", icon: "/blocks.svg" },
    { id: 1, type: "Text", icon: "/text.svg" },
    { id: 2, type: "Heading", icon: "/heading.svg" },
    { id: 3, type: "List", icon: "/list.svg" },
    { id: 4, type: "Image", icon: "/img.svg" },
    { id: 5, type: "Button", icon: "/button.svg" },
    { id: 6, type: "Divider", icon: "/divider.svg" },
    { id: 7, type: "Gifs", icon: "/gif.svg" },
    { id: 8, type: "Spacer", icon: "/spacer.svg" },
    { id: 9, type: "Video", icon: "/video.svg" },
    { id: 10, type: "Social", icon: "/social.svg" },
    { id: 11, type: "Timer", icon: "/timer.svg" },
    { id: 12, type: "Menu", icon: "/menu.svg" },
    { id: 13, type: "Stickers", icon: "/sticker.svg" },
    { id: 14, type: "Table", icon: "/table.svg" },
    { id: 15, type: "Calander", icon: "/calander.svg" },
    { id: 16, type: "HTML", icon: "/code.svg" },
  ];

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("contentType", type);
  };

  const handleClick = (type) => {
    switch (type) {
      case "Text":
        showTextProperties(type);
        break;
      case "Heading":
        showHeadingProperties(type);
        break;
      case "Blocks":
        showBlocks(type);
      default:
        break;
    }
  };

  return (
    <>
      <div
        className="bg-[#f3f5f8] w-[30%] h-full absolute left-0 p-5 border-r overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex gap-5 border-b pb-5">
          <button className={`${showBlock ? "opacity-50" : "border-r-2 px-5 text-base font-medium"}`} onClick={ShowContents}>Contents</button>
          <button className={`${showContents ? "opacity-50" : "text-base font-medium"}`} onClick={ShowBlocks}>Blocks</button>
        </div>
        
        {showBlock ? (
          <Blocks addColumns={showBlocks} />
        ) : (
          <div className="flex gap-4 justify-center flex-wrap pt-5">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border shadow-md rounded-md min-w-[122px] min-h-[100px] flex flex-col items-center justify-center"
              draggable
            onDragStart={(event) => handleDragStart(event, item.type)}
            onClick={() => handleClick(item.type)}
            >
              <img src={item.icon} alt={item.type} width={30} height={30} />
              <span className="text-sm font-normal">{item.type}</span>
            </div>
          ))}
        </div>
        )}
        
      </div>
    </>
  );
}

export default Contents;
