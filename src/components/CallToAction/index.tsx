import Link from "next/link";
import { IoIosContact } from "react-icons/io";

const CallToAction = () => {
  return (
    <section id="blogs" className="relative z-10 overflow-hidden bg-white">
      <div className="relative max-w-[80vw] overflow-hidden rounded-r-full bg-red-400 py-24">
        <div className="-mx-4 flex flex-wrap items-stretch ml-[12vw]">
          <div className="w-full px-4">
            <div className="text-left"> {/* Ensure all content is left-aligned */}
              <h2 className="mb-2.5 text-[4vw] font-medium text-white">
                We are here to support you.
              </h2>
              <p className="mb-6 max-w-[53vw] text-base leading-[1.5] text-white">
                Contact us to find out how our services can help achieve your
                goals.
              </p>
              <Link
                href="/"
                className="inline-block rounded-full border border-transparent bg-red-500 px-7 py-3 text-base font-medium text-black transition hover:scale-110 hover:border-2 hover:border-white"
              >
                <div className="flex flex-row items-center justify-start gap-4 text-white">
                  <IoIosContact className="text-[2vw] text-white hover:text-red-500" />
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
