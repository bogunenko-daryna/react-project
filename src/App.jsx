import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import axios from "axios";

function App() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setProducts(data.products);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home items={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
