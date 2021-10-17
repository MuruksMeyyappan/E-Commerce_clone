import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
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
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
