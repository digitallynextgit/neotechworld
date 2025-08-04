import Link from "next/link";
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 md:py-[120px] px-10">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full bg-[#09173b]">Contact Us</div>
      <div className="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#0f1b3c]  lg:h-[45%] xl:h-1/2"></div>
      <div className=" mx-auto max-w-5xl px-4">
      <div>
            <h2 className="text-white text-[13vw] md:text-[10vw] font-light text-left mb-10">Contact Us</h2>
          </div>
        <div className="-mx-4 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-0">

          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="mb-2 text-lg sm:mb-[18px] sm:text-[2vw] font-normal text-white">Our Location</h3>
            <div className="flex items-start gap-2">
              {/* <FaMapMarkerAlt className="text-xl text-primary mt-1" /> */}
              <Link
                className="text-base sm:text-base text-dark-6 underline hover:text-primary transition-colors hover:text-white"
                href="https://www.google.com/maps/search/?api=1&query=221-223,+Vipul+Agora,+MG+Road,+Gurugram,+Haryana-122001"
                target="_blank"
                rel="noopener noreferrer"
              >
                221-223, Vipul Agora, MG Road,<br />Gurugram, Haryana-122001
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <h3 className="mb-2 text-lg sm:mb-[18px] sm:text-[2vw] font-normal text-white">How Can We Help?</h3>
            <Link
              className="text-base sm:text-base text-dark-6 underline hover:text-primary transition-colors hover:text-white break-words"
              href="mailto:info@neotechworldlab.com"
            >
              info@neotechworldlab.com
            </Link>
          </div>
          <div className="w-full sm:w-1/3">
            <h3 className="mb-2 text-lg sm:mb-[18px] sm:text-[2vw] font-normal text-white">Website</h3>
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
        {/* Google Map Embed */}
        <div className="w-full mt-8">
          <iframe
            title="Neotech Location"
            src="https://www.google.com/maps?q=221-223,+Vipul+Agora,+MG+Road,+Gurugram,+Haryana-122001&output=embed"
            width="100%"
            height="400"
            className="rounded-xl w-full md:h-[500px] h-[500px] "
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
