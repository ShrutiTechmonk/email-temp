import React from "react";

function Blocks({ addColumns }) {
  const blockLayouts = [
    { id: 1, columns: 1 },
    { id: 2, columns: 2 },
    { id: 3, columns: 3 },
    { id: 4, columns: 4 },
  ];
  const handleClick = (columns) => {
    addColumns(columns);
  };
  const handleDragStart = (event, columns) => {
    event.dataTransfer.setData("columns", columns);
  };


  return (
    <div
      className="bg-[#f3f5f8] w-ful h-full absolute left-0 p-5 overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      
      <div className="flex flex-wrap gap-5">
        {blockLayouts.map((layout) => (
          <div
            key={layout.id}
            className={`w-[100%] p-2 cursor-pointer`}
            onClick={() => handleClick(layout.columns)}
            draggable
            onDragStart={(event) => handleDragStart(event, layout.columns)}
          >
            <div className={`flex columns-${layout.columns}`}>
              {Array.from({ length: layout.columns }).map((_, index) => (
                <div key={index} className="border border-[#c6c6c6] shadow-lg w-full p-5 rounded-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blocks;
