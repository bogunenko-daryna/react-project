import React from "react";

import { Categories, ProductBlock, SortPopup } from "../components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={["Temaki", "Vegetarian", "Rolls", "Baked"]}
        />
        <SortPopup items={["popular", "price", "alphabet"]} />
      </div>
      <h2 className="content__title">All Rolls</h2>
      <div className="content__items">
        {items.map((obj) => (
          <ProductBlock key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
