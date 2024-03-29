import React from "react";
import CarouselPage from "../layouts/CarouselPage";
import Separator from "./Seperator";
import BigCard from "../layouts/BigCard";
import GridCards from "../layouts/GridCards";
import ExpertTeam from "../layouts/ExpertTeam";
import NewsCarousel from "./NewsCarousel";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <>
      <CarouselPage />
      <Separator
        heading="BEAUTY IS AN ART WE MADE IT A SCIENCE"
        paragraph="Aesthetic medicine center, aesthetic treatments and procedures"
      />
      <BigCard
        title="My Awesome Product"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        imageSrc="https://images.pexels.com/photos/18252405/pexels-photo-18252405/free-photo-of-smiling-doctor-sitting-with-smartphone-and-tablet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <GridCards />
      <BigCard
        title="My Awesome Product 2"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        imageSrc="https://images.pexels.com/photos/5715896/pexels-photo-5715896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <ExpertTeam />
      <Separator heading="NEWS" paragraph="Latest News" />
      <NewsCarousel />
      <Newsletter />
    </>
  );
};

export default Home;
