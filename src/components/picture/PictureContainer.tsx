import InfoContainer from "./InfoContainer";
import Image from "../ui/Image";
import Modal from "../ui/Modal";

export default function PictureContainer() {
  return (
    <>
      <Modal content=<InfoContainer />>
        <Image src="/src/assets/pic1.jpg" />
      </Modal>
    </>
  );
}
