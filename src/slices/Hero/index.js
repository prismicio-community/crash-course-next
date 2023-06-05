import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";

/**
 * @typedef {import('@prismicio/client').Content.HeroSlice} HeroSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 */

/**
 * @param {HeroProps}
 */
export default function Hero({ slice }) {
  return (
    <Bounded as="section" className="relative bg-gray-800 text-slate-300">
      <PrismicNextImage
        field={slice.primary.backgroundImage}
        sizes="100vw"
        fill={true}
        className="pointer-events-none select-none object-cover"
        alt=""
      />
      <div className="relative grid justify-items-center gap-6 text-center">
        {prismic.isFilled.richText(slice.primary.tagline) && (
          <p className="max-w-lg text-sm font-semibold uppercase tracking-widest text-slate-500">
            <PrismicText field={slice.primary.tagline} />
          </p>
        )}
        {prismic.isFilled.richText(slice.primary.title) && (
          <h1 className="max-w-3xl text-6xl font-semibold text-white">
            <PrismicText field={slice.primary.title} />
          </h1>
        )}
        <div className="grid max-w-prose justify-center gap-6">
          <PrismicRichText field={slice.primary.text} />
        </div>
        {slice.items.length > 0 && (
          <ul className="flex flex-wrap gap-4">
            {slice.items.map(
              (item) =>
                prismic.isFilled.link(item.buttonLink) && (
                  <li key={item.buttonText}>
                    <ButtonLink
                      field={item.buttonLink}
                      type={
                        item.buttonStyle === "Filled" ? "filled" : "outlined"
                      }
                    >
                      {item.buttonText}
                    </ButtonLink>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
    </Bounded>
  );
}
