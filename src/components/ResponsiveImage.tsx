import { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  sizes?: string;
};

/**
 * Renders a <picture> with WebP source + srcset for /assets/*.png|jpg
 * that have pre-generated variants in public/assets (base.webp and base-640.webp).
 * Falls back to the original <img src> for anything else.
 */
export function ResponsiveImage({ src, alt, sizes = "(max-width: 768px) 100vw, 800px", className, ...rest }: Props) {
  const match = src.match(/^(\/assets\/.+)\.(png|jpe?g)$/i);
  if (!match) {
    return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" {...rest} />;
  }
  const base = match[1];
  const srcSet = `${base}-640.webp 640w, ${base}.webp 1600w`;
  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      <img
        src={`${base}.webp`}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        {...rest}
      />
    </picture>
  );
}
