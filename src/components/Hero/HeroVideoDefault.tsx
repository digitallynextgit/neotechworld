interface HeroVideoDefaultProps {
  opacity?: number;
}
const HeroVideoDefault = ({ opacity = 0.6 }: HeroVideoDefaultProps) => (
  <video
    autoPlay
    muted
    loop
    playsInline
    className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
    style={{ opacity }}
  >
    <source src="/gradient.webm" type="video/webm" />
    <source src="/bg.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);
export default HeroVideoDefault; 