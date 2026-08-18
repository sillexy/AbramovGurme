import Image from "next/image";

type SourceImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function SourceImage({ src, alt, className = "", priority = false }: SourceImageProps) {
  const optimizedSrc = src.startsWith("/products/") ? src.replace(/\.png$/i, ".webp") : src;
  const staticSrc = optimizedSrc.replace(/^\//, "./");

  return (
    <div className={`source-image ${className}`}>
      <Image src={staticSrc} alt={alt} fill priority={priority} sizes="(min-width: 1024px) 42vw, 90vw" />
    </div>
  );
}
