import PictureContainer from "../../components/picture/PictureContainer";
import Modal from "../../components/ui/Modal";
import Image from "../../components/ui/Image";

export default function ContentContainer() {
  return (
    <>
      <div className="grid w-screen grid-cols-2 gap-8 px-6 lg:grid-cols-3">
        <Modal content=<PictureContainer />>
          <Image src="/src/assets/pic1.jpg" />
        </Modal>
        <Modal content=<PictureContainer />>
          <Image src="/src/assets/pic1.jpg" />
        </Modal>
        <Modal content=<PictureContainer />>
          <Image src="/src/assets/pic1.jpg" />
        </Modal>
        <Modal content=<PictureContainer />>
          <Image src="/src/assets/pic1.jpg" />
        </Modal>
      </div>
    </>
  );
}
