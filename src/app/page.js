"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Contents from "./components/Contents";
import TextProperty from "./components/TextProperty";
import HeadingProperty from "./components/HeadingProperty";
import Blocks from "./components/Blocks";

export default function Home() {
  // const [history, setHistory] = useState([
  //   [{ id: 1, content: 'Drop content block here', position: { x: 0, y: 0 }  }]
  // ]);
  // const [currentStep, setCurrentStep] = useState(0);

  // const handleUndo = () => {
  //   if (currentStep > 0) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };

  // const handleRedo = () => {
  //   if (currentStep < history.length - 1) {
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  // const updateHistory = (newHistory) => {
  //   const newHistoryState = [
  //     ...history.slice(0, currentStep + 1),
  //     newHistory
  //   ];
  //   setHistory(newHistoryState);
  //   setCurrentStep(currentStep + 1);
  // };

  const [activeContentType, setActiveContentType] = useState("contents");
  const [selectedContent, setSelectedContent] = useState(null);
  const [containers, setContainers] = useState([]);

  const showTextProperties = (content) => {
    setActiveContentType("Text");
    setSelectedContent(content);
  };

  const showContents = () => {
    setActiveContentType("contents");
    setSelectedContent(null);
  };

  const showHeadingProperties = (content) => {
    setActiveContentType("Heading");
    setSelectedContent(content);
  };

  const showBlocks = (content) => {
    setActiveContentType("Blocks");
    setSelectedContent(content);
  };

  const addColumnsToEditor = (numColumns) => {
    const newContainer = {
      id: containers.length + 1,
      content: `Columns: ${numColumns}`,
      type: "Columns",
      numColumns: numColumns,
    };
    setContainers([...containers, newContainer]);
  };

  return (
    <div>
      <Header
      // handleUndo={handleUndo}
      // handleRedo={handleRedo}
      />
      <div className="flex">
        {activeContentType === "contents" && (
          <Contents showTextProperties={showTextProperties} showHeadingProperties={showHeadingProperties} showBlocks={showBlocks} />
        )}
        
        <Editor
          // activeContentType={activeContentType}
          containers={containers}
          showTextProperties={showTextProperties}
          showHeadingProperties={showHeadingProperties}
          showBlocks={showBlocks}
          setContainers={setContainers}
        />
        {activeContentType === "Blocks" && (
          <Blocks showContents={showContents} addColumns={addColumnsToEditor} content={selectedContent} />
        )}
        {activeContentType === "Text" && (
          <TextProperty showContents={showContents} content={selectedContent} />
        )}
        {activeContentType === "Heading" && (
          <HeadingProperty
            showContents={showContents}
            content={selectedContent}
          />
        )}
      </div>
    </div>
  );
}
