import useLocalStorage from "./useLocalStorage";

function ThemeFeature() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);

  return (
    <div>
      <p style={{ color: theme === "light" ? "black" : "darkgoldenrod" }}>
        Theme to the World!
      </p>
      <button
        style={{
          color: theme === "light" ? "black" : "darkgoldenrod",
          backgroundColor: theme === "light" ? "lightblue" : "black",
        }}
        onClick={handleToggleTheme}
      >
        Change Theme
      </button>
    </div>
  );
}

export default ThemeFeature;
