import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";

/** @type {import("@prismicio/react").JSXMapSerializer} */
const defaultComponents = {
  hyperlink: ({ children, node }) => (
    <PrismicNextLink
      field={node.data}
      className="underline decoration-1 underline-offset-1"
    >
      {children}
    </PrismicNextLink>
  ),
};

export function PrismicRichText({ components, ...props }) {
  return (
    <BasePrismicRichText
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
}
