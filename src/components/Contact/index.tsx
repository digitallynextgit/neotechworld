import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 md:py-[120px] ">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-[#09173b]"></div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#0f1b3c]  lg:h-[45%] xl:h-1/2"></div>
      <div className=" mx-auto max-w-5xl px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 ">
            <div className="">
              <div className="mt-[5vw] mb-12 lg:mb-[150px] h-[30vh]">
                <span className="mb-2 block text-[6vw] font-light  text-white">
                  CONTACT US
                </span>
                <h2 className=" text-[2vw] font-normal leading-[1.14] text-white">
                  For inquiries or to begin your genomic journey
                </h2>
              </div>
              <div className="flex flex-col gap-8 mb-12 sm:flex-row sm:justify-between sm:gap-0">
                <div className="w-full sm:w-1/3">
                  <h3 className="mb-3 text-lg sm:mb-[18px] sm:text-[2vw] font-normal text-white">Our Location</h3>
                  <Link
                    className="text-base sm:text-base text-dark-6 underline hover:text-primary transition-colors hover:text-white break-words"
                    href="https://www.google.com/maps/search/?api=1&query=221-223,+Vipul+Agora,+MG+Road,+Gurugram,+Haryana-122001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    221-223, Vipul Agora, MG Road,<br />Gurugram, Haryana-122001
                  </Link>
                </div>
                <div className="w-full sm:w-1/3">
                  <h3 className="mb-3 text-lg sm:mb-[18px] sm:text-[2vw] font-normal text-white">How Can We Help?</h3>
                  <Link
                    className="text-base sm:text-base text-dark-6 underline hover:text-primary transition-colors hover:text-white break-words"
                    href="mailto:info@neotechworldlab.com"
                  >
                    info@neotechworldlab.com
                  </Link>
                </div>
                <div className="w-full sm:w-1/3">
                  <h3 className="mb-3 text-lg sm:mb-[18px] sm:text-[2vw] font-normal text-white">Website</h3>
                  <Link    
                    className="text-base sm:text-base text-dark-6 underline hover:text-primary transition-colors hover:text-white break-words"
                    href="https://neotechworldlab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    neotechworldlab.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full ">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s
              "
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Adam Gelius"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@yourmail.com"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Phone*
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+885 1254 5211 552"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    Message*
                  </label>
                  <textarea
                    name="message"
                    rows={1}
                    placeholder="type your message here"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
