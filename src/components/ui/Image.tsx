import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export default function Image({ src, ...props }: ImageProps) {
  return (
    <>
      <img {...props} src={src} className="h-full" />
    </>
  );
}
