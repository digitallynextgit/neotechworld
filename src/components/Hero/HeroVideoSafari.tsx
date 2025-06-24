const HeroVideoSafari = () => (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none "
  >
    <source src="/safari.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);
export default HeroVideoSafari; 