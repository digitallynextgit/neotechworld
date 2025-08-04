import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const HomeBlogSection = ({ posts }: any) => {
  return (
    <section className="bg-white relative pb-10 pt-20  lg:pb-20 lg:pt-[120px]">
      <div className="ml-[12vw] max-w-[80vw]">
        <div className="mb-[60px]">
          <h2 className="lg:text-[5vw] text-[12vw] text-center lg:text-left">OUR RECENT NEWS</h2 >
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts.slice(0, 3).map((blog: any, i: number) => (
            <div key={i} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
