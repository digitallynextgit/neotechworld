
import { GiReceiveMoney, GiMedicinePills, GiDna1 } from "react-icons/gi";
import { FaHospital, FaUserNurse } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import React from "react";

export interface Stat {
  icon: React.ReactNode;
  value: number | string;
  suffix: string;
  prefix: string;
  label: string;
  start: number;
  end: number;
  duration: number;
  isDecrease?: boolean;
  isText?: boolean;
}

export const statsData: Stat[] = [
  {
    icon: (
      <GiReceiveMoney className="mb-6 h-12 w-12 text-white transition-all duration-300 hover:scale-110" />
    ),
    value: 35,
    suffix: "%",
    prefix: "",
    label: "cost savings in pilot programs",
    start: 28,
    end: 35,
    duration: 1500,
  },
  {
    icon: (
      <GiMedicinePills className="mb-6 h-12 w-12 text-white transition-all duration-300 hover:scale-110" />
    ),
    value: 15,
    suffix: "%",
    prefix: "",
    label: "better long-term medication adherence",
    start: 0,
    end: 15,
    duration: 1200,
  },
  {
    icon: (
      <FaHospital className="mb-6 h-12 w-12 text-white transition-all duration-300 hover:scale-110" />
    ),
    value: 14,
    suffix: "%",
    prefix: "",
    label: "drop in hospital readmissions",
    start: 0,
    end: 14,
    duration: 1200,
  },
  {
    icon: (
      <FaUserNurse className="mb-6 h-12 w-12 text-white transition-all duration-300 hover:scale-110" />
    ),
    value: 12 ,
    suffix: "-> 4",
    prefix: "",
    label: "One patient's medication load reduced from 12 to 4—stabilizing treatment and preventing hospitalization",
    start: 0,
    end: 12,
    duration: 1200,
  },
  {
    icon: (
      <FaEarthAmericas className="mb-6 h-12 w-12 text-white transition-all duration-300 hover:scale-110" />
    ),
    value: 42,
    suffix: "%",
    prefix: "",
    label: "rise in global PGx (pharmacogenomics) adoption",
    start: 0,
    end: 42,
    duration: 1500,
  },
  {
    icon: (
      <GiDna1 className="mb-6 h-12 w-12 text-white transition-all duration-300 hover:scale-110" />
    ),
    value: 100,
    suffix: "+",
    prefix: "",
    label: "public health pilots influenced by NeoTech-level genomics",
    start: 0,
    end: 100,
    duration: 1800,
  },
];