"use client";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Blocks from "./Blocks";

function Editor({
  showTextProperties,
  showHeadingProperties,
  showBlocks,
  containers, 
  setContainers
}) {
  // const [containers, setContainers] = useState([]);
  // const [activeContentType, setActiveContentType] = useState(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const columns = event.dataTransfer.getData("columns");
    if (columns) {
      addColumnsToEditor(parseInt(columns));
    } else {
      const contentType = event.dataTransfer.getData("contentType");
      const newContainer = {
        id: containers.length + 1,
        content: "Drop content block here",
        type: contentType,
      };
      setContainers([...containers, newContainer]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleCopy = (id) => {
    const newContainer = {
      id: containers.length + 1,
      content: "Drop content block here",
    };
    setContainers([...containers, newContainer]);
  };

  const handleDelete = (id) => {
    setContainers(containers.filter((container) => container.id !== id));
  };

  const handleContentClick = (container) => {
    switch (container.type) {
      case "Text":
        showTextProperties(container);
        break;
      case "Heading":
        showHeadingProperties(container);
        break;
        case "Blocks":
          showBlocks(container);
          break;
      default:
        break;
    }
  };

  const addColumnsToEditor = (numColumns) => {
    const newBlock = {
      id: containers.length + 1,
      type: "Blocks",
      columns: numColumns,
      content: Array.from({ length: numColumns }).map((_, index) => `Column ${index + 1}`),
    };
    setContainers([...containers, newBlock]);
  };

  return (
    <>
    
      <div
        className="absolute w-[70%] h-full right-0 px-10 py-20 overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        // addColumns={addColumnsToEditor}
      >
          {containers.map((container) => (
            <Draggable key={container.id}>
              <div className="container hover:border-2 hover:border-blue-700 px-20 py-10">
              <div className="text-base font-normal my-5 relative opacity-60 hover:opacity-100 flex justify-center items-center border-2 border-blue-700 p-10"
              onClick={() => handleContentClick(container)}
              >
                <div
                  className="bg-blue-700 w-[25px] absolute -right-[27px] rounded-r-lg flex flex-col justify-center items-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {!isHovered && (
                    <div className="">
                      <img
                        src="/toggle.svg"
                        alt="toggle"
                        width={23}
                        height={23}
                      />
                    </div>
                  )}
                  {isHovered && (
                    <div className="flex flex-col items-center justify-center gap-2 py-2">
                      <img src="/move.svg" alt="move" width={20} height={20} />
                      <img
                        src="/copy.svg"
                        alt="copy"
                        width={23}
                        height={23}
                        onClick={() => handleCopy(container.id)}
                      />
                      <img
                        src="/delete.svg"
                        alt="delete"
                        width={23}
                        height={23}
                        onClick={() => handleDelete(container.id)}
                      />
                    </div>
                  )}
                </div>
                {container.type === "Block"
                  ? Array.from({ length: container.columns }).map((_, index) => (
                      <div
                        key={index}
                        className="border border-[#c6c6c6] shadow-lg w-full p-5 rounded-md"
                      >
                        
                      </div>
                    ))
                  : container.content}
              </div>
        </div>
            </Draggable>
          ))}
          
      </div>
      {/* {activeContentType === "Text" && <TextProperty />} */}
    </>
  );
}

export default Editor;
