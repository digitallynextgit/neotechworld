// utils/isSafari.ts
export function isSafari() {
  if (typeof window === "undefined") return false;
  return (
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
    !window.navigator.userAgent.includes("CriOS")
  );
} 