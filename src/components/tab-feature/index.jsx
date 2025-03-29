import { useState } from "react";
import "./tabs.css";

function Tabs({ tabsContent, onChange }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleContentDisplay(getTabIndex) {
    setCurrentIndex(getTabIndex);
    onChange(getTabIndex);
  }

  return (
    <div>
      <div>
        {tabsContent.map((singleTab, index) => (
          <div
            className="wrapper"
            onClick={() => handleContentDisplay(index)}
            key={singleTab.id}
          >
            <span>{singleTab.label}</span>
          </div>
        ))}
      </div>
      <div>
        {
          /* {tabsContent[currentIndex] && tabsContent[currentIndex].content} */
          tabsContent[currentIndex] ? tabsContent[currentIndex].content : null
        }
      </div>
    </div>
  );
}

export default Tabs;
