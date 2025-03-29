import MenuList from "./menu-list";
import "./styles.css";

function NestedNavigationFeature({ list }) {
  return (
    <div className="nav-container">
      <MenuList list={list} />
    </div>
  );
}

export default NestedNavigationFeature;
