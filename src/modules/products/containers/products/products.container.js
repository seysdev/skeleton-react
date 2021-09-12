import { useState, useEffect } from "react";
import { CardProduct } from "../../components/";
export function ProductsContainer() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    return fetch("https://swapi.dev/api/people");
  }

  useEffect(() => {
    getProducts()
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        // respuesta
        setProducts(products);
      });
  }, []);

  console.log("products", products.results);

  return (
    <div className="products">
      <div className="grid grid-cols-4 gap-4">
        {products.results &&
          products.results.map((product) => (
            <CardProduct name={product.name} />
          ))}
      </div>
    </div>
  );
}
