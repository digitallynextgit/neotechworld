const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "635px",
  center,
  subtitleClassName = "mb-2 block text-lg font-semibold text-[#fdb73e]",
  titleClassName = "mb-4 text-7xl font-bold text-[#09173b] sm:text-4xl md:text-[4vw] md:leading-[1.2] font-heading",
  className = "",
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  subtitleClassName?: string;
  titleClassName?: string;
  className?: string;
}) => {
  return (
    <div className={`-mx-4 flex flex-wrap ${className}`}>
      <div
        className={`wow fadeInUp w-full px-4 ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subtitle && (
          <span className={subtitleClassName}>
            {subtitle}
          </span>
        )}
        <h2 className={titleClassName}>
          {title}
        </h2>
        <p className="text-[1vw] leading-relaxed tex-black sm:leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
