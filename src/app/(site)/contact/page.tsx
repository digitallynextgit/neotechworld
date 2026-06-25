// import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with NeoTech World to discuss clinical genomics, pharmacogenomics and preventive genomic testing for your hospital, lab, organization or personal health needs.",
};

const ContactPage = () => {
  return (
    <>
      {/* <Breadcrumb pageName="Contact Page" /> */}

      <Contact />
    </>
  );
};

export default ContactPage;
