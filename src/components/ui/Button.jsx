function Button({
  children,
  variant = "primary",
  onClick,
  href,
}) {
  const baseClass =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90",

    outline:
      "border border-primary text-primary hover:bg-primaryalt",
  };

  const className = `${baseClass} ${variants[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;