// Blog.js
import React from "react";
import Back from "../common/Back";
import img from "../images/about.jpg";
import Footer from "../common/footer/Footer";
import Abb from "./Abb";

const Blog = () => {
  return (
    <section className="blog-out-mb">
      <Back name="Blog" title="Our Blogs" cover={img} />
      <div className="container recent">
        <Abb /> 
             </div>
      <Footer />
    </section>
  );
};

export default Blog;
