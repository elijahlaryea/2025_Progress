import { useEffect, useState } from "react";

function ScrollFeature({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(dataUrl) {
    try {
      setLoading(true);

      const response = await fetch(dataUrl);
      const result = await response.json();

      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
  }
  console.log(data);

  function handleScrolling() {
    console.log(
      document.body.scrollTop,
      "bodyScrollTop",
      document.documentElement.scrollTop,
      "ScrollTop",
      document.documentElement.scrollHeight,
      "ScrollHeight",
      document.documentElement.clientHeight,
      "Client Height"
    );

    const amountScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;



    //scrollHeight = total height of page including overflow; area visibe through scrolling
    //clientHeight = portion of page visible to the user at a particular time
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // const height = document.documentElement.scrollHeight;

    setScrollPercent((amountScrolled / height) * 100);
  }

  //fetch list of data from the getProducts URL
  useEffect(() => {
    fetchData(url);
  }, [url]);

  //to measure the scroll and height values while scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercent);
  

  if (loading) {
    return <div>Loading your products, Please wait a moment!</div>;
  }

  if (errorMsg) {
    return <div>An error occurred. Please try again later</div>;
  }

  return (
    <div>
      <h1>Custom Scroll Indicator</h1>
      <div>
        {data && data.length && data.length > 0
          ? data.map((singleProduct) => (
              <div key={singleProduct.id}>{singleProduct.title}</div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ScrollFeature;
