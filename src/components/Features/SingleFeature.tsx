import { Feature } from "@/types/feature";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink, images } = feature;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 h-[200px] w-full overflow-hidden rounded-2xl">
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-newblue">
          <span className="absolute left-0 top-0 z-[-1] text-white mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-newblue bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
        <Link
          href={btnLink}
          className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
        >
          {btn}
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
