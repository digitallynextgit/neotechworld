import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Pill, ShieldCheck, BookOpenCheck } from "lucide-react";

const offerings = [
  {
    icon: <FlaskConical className="w-10 h-10 text-newblue mb-4" />, // Precision Diagnostics
    title: "Precision Diagnostics",
    desc: "Decode complex, chronic, and lifestyle conditions with genome-guided clarity.",
    img: "https://images.pexels.com/photos/708848/pexels-photo-708848.jpeg?auto=compress&w=600&q=80",
  },
  {
    icon: <Pill className="w-10 h-10 text-newblue mb-4" />, // Pharmacogenomics
    title: "Pharmacogenomics",
    desc: "Tailor every prescription to the patient's DNA—eliminating waste and risk.",
    img: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&w=600&q=80",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-newblue mb-4" />, // Preventive Genomics
    title: "Preventive Genomics",
    desc: "Catch problems before they start. Screen for metabolic, hereditary, and mental health risks early.",
    img: "https://images.pexels.com/photos/708898/pexels-photo-708898.jpeg?auto=compress&w=600&q=80",
  },
  {
    icon: <BookOpenCheck className="w-10 h-10 text-newblue mb-4" />, // Clinical R&D
    title: "Clinical R&D & Registry Solutions",
    desc: "Turn data into decisions—build national registries, dashboards, and publishable insight.",
    img: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&w=600&q=80",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className=""
    >

    </section>
  );
};

export default About;
