import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories/Categories";
import NavBar from "../components/Navbar";
import Products from "../components/Products/Products";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
}

export default Home;
