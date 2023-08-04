"use client";

import { useState } from "react";
import Link from "next/link";

interface CarouselProps {
  sets: {
    images: string[];
    titles: string[];
    descriptions: string[];
    links: string[];
  }[];
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
    <div className="relative w-full overflow-hidden pb-4">
      <div
        className="flex"
        style={{
          width: `${100 * totalSets}%`,
          transform: `translateX(-${currentIndex * (100 / totalSets)}%)`,
          transition: "transform 0.3s",
        }}
      >
        {sets.map((set, setIndex) => (
          <div
            key={setIndex}
            className="w-full flex-shrink-0 pb-4"
            style={{ width: carouselWidth }}
          >
            <div
              className={`flex flex-col ${
                setIndex === currentIndex ? "" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.3s" }}
            >
              {set.images.map((image, imageIndex) => (
                <div key={imageIndex} className="flex flex-col pb-6">
                  <div className="flex flex-row">
                    <div className="w-[55%]">
                      <Link href={set.links[imageIndex]}>
                        <img src={image} alt={`Image ${imageIndex + 1}`} className="transform duration-100 ease-out hover:rounded-[50%]" />
                      </Link>
                    </div>
                    <div className="flex flex-col flex-1 items-start pl-4 text-4xl w-[45%]">
                      <h2 className="uppercase pb-6">
                        {set.titles[imageIndex]}
                      </h2>
                      <p>{set.descriptions[imageIndex]}</p>
                      <Link href={set.links[imageIndex]} className="mt-auto">
                        <img
                          className="w-10"
                          src="/arrow-up.svg"
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
              src="arrow-previous.svg"
              alt="previous arrow"
              className="w-10"
            />
            <div className="text-left self-center">
              PREVIOUS
              <br />
              projects
            </div>
          </button>
        )}
        {!isLastSet && (
          <button className="flex flex-row space-x-5" onClick={nextSlide}>
            <div className="text-left self-center">
              NEXT
              <br />
              projects
            </div>
            <img
              src="arrow-next.svg"
              alt="next arrow"
              className="w-10"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
