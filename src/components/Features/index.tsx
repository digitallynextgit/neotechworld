import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pb-8 pt-20  lg:pb-[70px] lg:pt-[100px]">
      <div className="container">
        <SectionTitle
          subtitle=""
          title="What We Solve"
          paragraph="..."
          center
          className=""
          subtitleClassName="text-newblue"
          titleClassName="text-6xl font-semibold uppercase text-newblue"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
        <Link href="/#" className="text-newblue text-center block mt-10 ">Explore Real-World Outcomes</Link>
      </div>
    </section>
  );
};

export default Features;
