import { PrismicLink } from "@prismicio/react";

export const ButtonLink = ({ type = "filled", ...props }) => {
  return (
    <PrismicLink
      className={`inline-block rounded border-2 border-prismic-purple px-5 py-3 font-semibold text-white ${
        type === "filled"
          ? "bg-prismic-purple text-white"
          : "text-prismic-purple"
      }`}
      {...props}
    />
  );
};
