import HomeHeader from "@/components/HomeHeader";
import Carousel from "../components/Carousel";

const projects = [
  {
    images: ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"],
    titles: ["cheap and fancy", "some things we shoot", "Project 3"],
    descriptions: ["A book about cheap and beautiful meals.", "A photography YouTube channels visual identity.", "Description 3"],
    links: ["/projects/cheap-and-fancy", "/projects/some-things-we-shoot", "/projects/"]
  },
  {
    images: ["/images/img4.jpg", "/images/img5.jpg", "/images/img6.jpg"],
    titles: ["Project 4", "Project 5", "Project 6"],
    descriptions: ["Description 4", "Description 5", "Description 6"],
    links: ["/projects/cheap-and-fancy", "/projects/some-things-we-shoot", "/projects/"]
  },
  {
    images: ["/images/img7.jpg"],
    titles: ["Project 7"],
    descriptions: ["Description 7"],
    links: ["/projects/cheap-and-fancy"]
  },
  // Add more sets of images, titles, and descriptions as needed
];

const Home: React.FC = () => {
  return (
    <section>
      <HomeHeader />
      <div className="p-6 pt-0">
        <Carousel sets={projects} />
      </div>
    </section>
  );
};

export default Home;
