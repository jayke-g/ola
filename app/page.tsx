import HomeHeader from "@/components/HomeHeader";
import Carousel from "@/components/Carousel";
import projectsPreviews from "@/data/projectsPreview";

const HomePage: React.FC = () => {
  return (
    <section>
      <HomeHeader />
      <div className="p-6 pt-0">
        <Carousel sets={projectsPreviews} />
      </div>
    </section>
  );
};

export default HomePage;
