import Link from "next/link";
import { IoIosContact } from "react-icons/io";
import { FaCalendarCheck, FaHandshake, FaNetworkWired, FaHospital } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section id="blogs" className="relative z-10 overflow-hidden ">
      <div className="relative max-w-5xl  bg-black/20 rounded-3xl p-10 overflow-hidden rounded-r-full py-24">
        <div className="-mx-4 flex flex-wrap items-stretch lg:ml-[12vw]">
          <div className="w-full px-4">
            <div className="text-left"> {/* Ensure all content is left-aligned */}
              <h2 className="mb-2.5 lg:text-[4vw] text-[10vw] font-medium text-white">
                We are here to support you.
              </h2>
              {/* <p className="mb-6 max-w-[53vw] text-base leading-[1.5] text-white">
                Contact us to find out how our services can help achieve your
                goals.
              </p> */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-block rounded-full border border-transparent bg-[#fe5d66] px-7 py-3 text-base font-medium text-black transition hover:scale-110 hover:border-2 hover:border-white"
                >
                  <div className="flex flex-row items-center justify-start gap-2 text-white">
                    <FaCalendarCheck className="text-[1vw] text-white " />
                    Talk to expert
                  </div>
                </Link>
                
                <Link
                  href="/"
                  className="inline-block rounded-full border border-transparent bg-[#fe5d66] px-7 py-3 text-base font-medium text-black transition hover:scale-110 hover:border-2 hover:border-white"
                >
                  <div className="flex flex-row items-center justify-start gap-2 text-white">
                    <FaHandshake className="text-[1vw] text-white " />
                    Partner With Us
                  </div>
                </Link>
                
                <Link
                  href="/"
                  className="inline-block rounded-full border border-transparent bg-[#fe5d66] px-7 py-3 text-base font-medium text-black transition hover:scale-110 hover:border-2 hover:border-white"
                >
                  <div className="flex flex-row items-center justify-start gap-2 text-white">
                    <FaNetworkWired className="text-[1vw] text-white " />
                    Join Our Network
                  </div>
                </Link>
                
                {/* <Link
                  href="/"
                  className="inline-block rounded-full border border-transparent bg-[#fe5d66] px-7 py-3 text-base font-medium text-black transition hover:scale-110 hover:border-2 hover:border-white"
                >
                  <div className="flex flex-row items-center justify-start gap-2 text-white">
                    <FaHospital className="text-[1vw] text-white " />
                    Download Hospital Kit
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
