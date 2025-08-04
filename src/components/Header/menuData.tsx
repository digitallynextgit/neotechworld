import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      { id: 31, title: "Precision Diagnostics", path: "#", newTab: false },
      { id: 32, title: "Pharmacogenomics", path: "#", newTab: false },
      { id: 33, title: "Preventive Genomics", path: "#", newTab: false },
      { id: 34, title: "R&D and Public Health Integration", path: "#", newTab: false },
    ],
  },
  {
    id: 4,
    title: "Our Cohorts",
    newTab: false,
    submenu: [
      { id: 41, title: "For Hospitals and Clinics", path: "#", newTab: false },
      { id: 42, title: "For Government", path: "#", newTab: false },
      { id: 43, title: "For Corporates", path: "#", newTab: false },
      { id: 44, title: "For Diagnostic Labs", path: "#", newTab: false },
      { id: 45, title: "For Pharma and Biotech", path: "#", newTab: false },
    ],
  },
  {
    id: 5,
    title: "Resources",
    newTab: false,
    submenu: [
      { id: 51, title: "Blogs & Articles", path: "#", newTab: false },
      { id: 52, title: "Glossary", path: "#", newTab: false },
      { id: 53, title: "Download Brochures", path: "#", newTab: false },
      { id: 54, title: "Download Reports", path: "#", newTab: false },
      { id: 55, title: "White Papers", path: "#", newTab: false },
      { id: 56, title: "FAQs", path: "#", newTab: false },
    ],
  },

  // {
  //   id: 6,
  //   title: "News & Events",
  //   path: "/blogs",
  //   newTab: false,
  // },
  {
    id: 7,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
