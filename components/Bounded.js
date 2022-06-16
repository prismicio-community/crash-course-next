import clsx from "clsx";

export const Bounded = ({
  as: Comp = "div",
  collapsible = true,
  className,
  children,
}) => {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx("px-6 py-32 md:px-10 xl:py-44 2xl:py-72", className)}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </Comp>
  );
};
