type ImageProps = {
  src: string;
};

export default function Image({ src }: ImageProps) {
  return (
    <>
      <img src={src} className="h-full w-full" />
    </>
  );
}
