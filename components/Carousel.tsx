'use client'

import { useState } from "react";
import Link from "next/link";
import { ProjectsPreview } from "@/data/projectsPreview";

interface CarouselProps {
  sets: ProjectsPreview[];
}

const Carousel: React.FC<CarouselProps> = ({ sets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSets = sets.length;
  const carouselWidth = `${100 / totalSets}%`;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSets);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
  };

  const isFirstSet = currentIndex === 0;
  const isLastSet = currentIndex === totalSets - 1;

  return (
    <section className="relative w-full overflow-hidden pb-4">
      <div
        className="flex"
        style={{
          width: `${100 * totalSets}%`,
          transform: `translateX(-${currentIndex * (100 / totalSets)}%)`,
          transition: "transform 0.3s",
        }}
      >
        {sets && sets.map((set, setIndex) => (
          <div
            key={setIndex}
            id="section-carousel"
            className="w-full flex-shrink-0 pb-4"
            style={{ width: carouselWidth }}
          >
            <div
              className={`flex flex-col ${
                setIndex === currentIndex ? "" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.3s" }}
            >
              {set.image.map((image, imageIndex) => (
                <div key={imageIndex} className="flex flex-col pb-6">
                  <div className="flex grow justify-center align-center">
                    <div className="object-cover max-w-3xl">
                      <Link href={set.title[imageIndex]}>
                        <img
                          src={image}
                          alt={`Image ${imageIndex + 1}`}
                          className="transform duration-100 ease-out hover:rounded-[50%]"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:flex flex-col flex-1 items-start pl-4 text-4xl w-[45%]">
                      <h2 className="uppercase pb-6">
                        {set.name[imageIndex]}
                      </h2>
                      <p>{set.description[imageIndex]}</p>
                      <Link href={set.title[imageIndex]} className="mt-auto">
                        <img
                          className="w-10 hover:scale-125"
                          src="/images/arrow-up.svg"
                          alt="arrow up"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-4xl leading-7 flex flex-row justify-between">
        {isFirstSet && <div />}
        {!isFirstSet && (
          <button className="flex flex-row space-x-5" onClick={prevSlide}>
            <img
              src="/images/arrow-previous.svg"
              alt="previous arrow"
              className="w-10"
            />
            <div className="hidden xs:block text-left self-center">
              PREVIOUS
              <br />
              projects
            </div>
          </button>
        )}
        {!isLastSet && (
          <button className="flex flex-row space-x-5" onClick={nextSlide}>
            <div className="hidden xs:block text-left self-center">
              NEXT
              <br />
              projects
            </div>
            <img src="/images/arrow-next.svg" alt="next arrow" className="w-10" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Carousel;
