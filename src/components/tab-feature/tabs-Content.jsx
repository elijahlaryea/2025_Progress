import Tabs from "./index";

function RandomContent() {
  return <div>This is some random content for Tab 3!</div>;
}

function TabsContent() {
  const tabsArray = [
    {
      id: 1,
      label: "Tab 1",
      content: "This is content for Tab 1",
    },
    {
      id: 2,
      label: "Tab 2",
      content: "This is content for Tab 2",
    },
    {
      id: 3,
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabsArray} onChange={handleChange} />;
}

export default TabsContent;
