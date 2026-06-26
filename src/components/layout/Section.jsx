function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`
        min-h-screen
        snap-start
        px-6
        pt-32
        pb-12
        ${className}
      `}
    >
      <div className="mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export default Section;