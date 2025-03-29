import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

function MenuItem({ singleNavItem }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function handleToggleChildren(getClickedLabel) {
    setDisplayChildren({
      ...displayChildren,
      [getClickedLabel]: !displayChildren[getClickedLabel],
    });
  }

  console.log(displayChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{singleNavItem.label}</p>
        {singleNavItem &&
        singleNavItem.children &&
        singleNavItem.children.length ? (
          <span onClick={() => handleToggleChildren(singleNavItem.label)}>
            {displayChildren[singleNavItem.label] ? (
              <FaMinus color="darkgoldenrod" size={20} />
            ) : (
              <FaPlus color="darkgoldenrod" size={20} />
            )}
          </span>
        ) : null}
      </div>
      {singleNavItem &&
      singleNavItem.children &&
      singleNavItem.children.length > 0 &&
      displayChildren[singleNavItem.label] ? (
        <MenuList list={singleNavItem.children} />
      ) : null}
    </li>
  );
}

export default MenuItem;
