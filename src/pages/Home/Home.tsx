import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/NavbarV2";
import Inicio from "../../components/Inicio";

function Home() {
  const slides = [
    { url: "https://site-marcava.vercel.app/images/MVC_2222.jpg", title: "Foto 01" },
    { url: "https://site-marcava.vercel.app/images/MVC_3880.jpg", title: "Foto 02" },
    { url: "https://site-marcava.vercel.app/images/MVC_4099.jpg", title: "Foto 03" },
  ];

  return (
    <React.Fragment>
      <section className="conteiner">
        <div className="screenCarousel">
          <Navbar />
          <Inicio />
          <Carousel slides={slides} />

        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
