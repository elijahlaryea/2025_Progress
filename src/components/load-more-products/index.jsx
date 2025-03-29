import { useEffect, useState } from "react";
import "./styles.css";

function LoadProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((previousProducts) => [
          ...previousProducts,
          ...result.products,
        ]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Fetching products! Please wait a moment</div>;
  }

  if (error) {
    return <div>An error occurred! Please try again after some time</div>;
  }

  return (
    <div className="all-products-container">
      <div className="products-container">
        {products && products.length
          ? products.map((singleProduct) => (
              <div className="product" key={singleProduct.id}>
                <img src={singleProduct.thumbnail} alt={singleProduct.title} />
                <p>{singleProduct.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="more-products-button">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>The End</p> : null}
      </div>
    </div>
  );
}

export default LoadProducts;
