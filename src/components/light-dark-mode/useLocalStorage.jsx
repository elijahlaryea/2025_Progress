import { useEffect, useState } from "react";

//where key can be "theme" and initialValue can be 'light' or 'dark' mode

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      //either parse what is already in localStorage(key) or parse the initialValue
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(initialValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = initialValue;
    }

    //returns a specific value from local Storage, 'theme' in this case. because it retrieves the key.
    return currentValue;
  });

  //when value is changed later, save new value alongside key in localStorage once again to retrieve it later
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
