function SectionTitle({
  title,
  highlight,
  align = "center",
}) {
  return (
    <div
      className={`mb-12 ${
        align === "center"
          ? "text-center"
          : "text-left"
      }`}
    >
      <h2 className="text-4xl font-bold">
        {title}{" "}
        <span className="text-primary">
          {highlight}
        </span>
      </h2>
    </div>
  );
}

export default SectionTitle;