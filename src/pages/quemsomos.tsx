import React from "react";
import Navbar from "../components/NavbarV2";
import ImageSlider from "../components/ImageSlider/ImageSlider";

function QuemSomos() {
  const slides = [
    { url: "http://localhost:3000/images/MVC_2222.jpg", title: "Foto 01" },
    { url: "http://localhost:3000/images/MVC_3880.jpg", title: "Foto 02" },
    { url: "http://localhost:3000/images/MVC_4099.jpg", title: "Foto 03" },
  ];

  const containerStyles = {
    width: "698",
    height: "50vh",
    margin: "0 auto",
  };

  return (
    <React.Fragment>
      <Navbar />
      <div style={containerStyles}>
        <ImageSlider slides={slides} parentWidth={containerStyles.width} />
      </div>

      <section className="conteiner">
        <div className="screenCarousel">
          <div className="Textos">
            <h1>Quem somos</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default QuemSomos;
