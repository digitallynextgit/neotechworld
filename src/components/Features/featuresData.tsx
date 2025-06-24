import { Feature } from "@/types/feature";
import { Puzzle, Pill, BookOpenCheck } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Puzzle className="w-10 h-10 text-white" />,
    title: "Treating More with Less",
    paragraph:
      "Chronic care in India often means 4–6 drugs per patient. Many are redundant or ineffective, creating a financial and operational burden. NeoTech helps simplify treatment at scale.",
    btn: "Learn More",
    btnLink: "/#",
    images: [
      "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
    ],
    currentImageIndex: 0
  },
  {
    id: 2,
    icon: <Pill className="w-10 h-10 text-white" />,
    title: "Right Drug. Right Dose. First Time.",
    paragraph:
      "Trial-and-error prescriptions aren't just risky—they're costly. We eliminate the mismatch through pharmacogenomics.",
    btn: "Learn More",
    btnLink: "/#",
    images: [
      "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg",
      "https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg",
      "https://images.pexels.com/photos/3683102/pexels-photo-3683102.jpeg"
    ],
    currentImageIndex: 0
  },
  {
    id: 3,
    icon: <BookOpenCheck className="w-10 h-10 text-white" />,
    title: "From Research to Real-World Use",
    paragraph:
      "India leads in scientific discovery, but lags in implementation. NeoTech bridges this gap with clinical-ready tools that doctors and health departments can use every day.",
    btn: "Learn More",
    btnLink: "/#",
    images: [
      "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
      "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
      "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
    ],
    currentImageIndex: 0
  },
];
export default featuresData;
