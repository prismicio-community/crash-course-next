import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";

import { Bounded } from "../../components/Bounded";
import { ButtonLink } from "../../components/ButtonLink";

/**
 * @typedef {import('../../types.generated').ImageAndTextSlice} ImageAndTextSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageAndTextSlice>} ImageAndTextProps
 */

/**
 * @param {ImageAndTextProps}
 */
const ImageAndText = ({ slice }) => {
  return (
    <Bounded as="section" className="bg-white text-slate-500">
      <div className="grid grid-flow-col-dense items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div
          className={
            slice.primary.imageSide === "Right" ? "col-start-2" : undefined
          }
        >
          <PrismicNextImage
            field={slice.primary.image}
            layout="responsive"
            className="bg-gray-100"
          />
        </div>
        <div className="grid gap-6">
          {prismicH.isFilled.richText(slice.primary.tagline) && (
            <p className="max-w-xs text-sm font-semibold uppercase tracking-widest text-slate-300">
              <PrismicText field={slice.primary.tagline} />
            </p>
          )}
          {prismicH.isFilled.richText(slice.primary.text) && (
            <div className="grid max-w-prose gap-6">
              <PrismicRichText
                field={slice.primary.text}
                components={{
                  heading1: ({ children }) => (
                    <h2 className="text-4xl font-semibold text-slate-800">
                      {children}
                    </h2>
                  ),
                }}
              />
            </div>
          )}
          {prismicH.isFilled.link(slice.primary.buttonLink) && (
            <div>
              <ButtonLink field={slice.primary.buttonLink}>
                {slice.primary.buttonText}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default ImageAndText;
