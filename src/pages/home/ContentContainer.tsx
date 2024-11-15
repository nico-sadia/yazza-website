import PictureContainer from "../../components/picture/PictureContainer";

export default function ContentContainer() {
  return (
    <>
      <div className="flex w-screen flex-row justify-evenly gap-8 px-6">
        <PictureContainer />
        <PictureContainer />
        <PictureContainer />
      </div>
    </>
  );
}
