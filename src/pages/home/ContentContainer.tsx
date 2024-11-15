import PictureContainer from "../../components/picture/PictureContainer";

export default function ContentContainer() {
  return (
    <>
      <div className="grid w-screen grid-cols-2 gap-8 px-6 lg:grid-cols-3">
        <PictureContainer />
        <PictureContainer />
        <PictureContainer />
      </div>
    </>
  );
}
