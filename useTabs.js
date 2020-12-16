import React, {useState} from "react";

export const useTabs = (initialTab, allSection) => {
    if (!allSection || !Array.isArray(allSection)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
      currentItem: allSection[currentIndex],
      changeItem: setCurrentIndex
    };
  };