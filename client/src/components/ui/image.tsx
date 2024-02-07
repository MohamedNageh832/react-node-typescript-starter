import { ComponentProps } from "react";

type ImageProps = ComponentProps<any>;

const Image = ({ src, alt }: ImageProps) => {
  const parsedSrc = typeof src === "string" ? src : URL.createObjectURL(src);

  return (
    <section className="rounded-md border border-solid p-1">
      <img src={parsedSrc} alt={alt} />
    </section>
  );
};

export { Image };
