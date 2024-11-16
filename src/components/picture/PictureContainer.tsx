import InfoContainer from "./InfoContainer";
import Image from "../ui/Image";

export default function PictureContainer() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-8 drop-shadow-lg">
      <div className="h-[40rem] max-lg:h-[30rem] max-md:h-[25rem]">
        <Image src="/src/assets/pic1.jpg" />
      </div>
      <InfoContainer />
    </div>
  );
}
