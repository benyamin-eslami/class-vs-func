import { useEffect, useState } from "react";
import ProductFunction from "./ProductFunction";

const ProductsFunction = () => {
  const dummy_datas = ["chips", "tea"];
  const [showProducts, setShowProducts] = useState(true);
  const [foundedSearch, setFoundedSearch] = useState(["chips", "tea"]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFoundedSearch((foundedSearch) => {
      return dummy_datas.filter((item) => item.includes(search));
    });

    return () => console.log("not found");
  }, [search]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={searchHandler} />
      {showProducts &&
        foundedSearch.map((item) => {
          {
            console.log(item);
          }
          return <ProductFunction key={item} item={item} />;
        })}
      <button onClick={() => setShowProducts((state) => !state)}>
        {showProducts ? "hide" : "show"} products
      </button>
    </>
  );
};

export default ProductsFunction;
