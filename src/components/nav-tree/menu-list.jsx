import MenuItem from "./menu-item";

function MenuList({ list = [] }) {
  return (
    <ul className="list-container">
      {list && list.length ? (
        list.map((listItem) => <MenuItem singleNavItem={listItem} />)
      ) : (
        <p>No navigation list found</p>
      )}
    </ul>
  );
}

export default MenuList;
