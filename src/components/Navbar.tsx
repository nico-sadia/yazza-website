import MailForm from "./MailForm";
import Icon from "./ui/Icon";
import Modal from "./ui/Modal";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 flex min-w-full flex-row items-center gap-6 p-6 sm:gap-8 md:gap-12">
        <img src="/src/assets/burgermenu.svg" className="max-w-10"></img>
        <h1 className="text-center text-2xl font-bold">Yasmin Sadia</h1>
        <div className="ml-auto mr-4 flex flex-row gap-12 max-sm:hidden">
          <Icon
            src="/src/assets/icons8-instagram.svg"
            link="https://www.instagram.com/theyrecreative/?hl=en"
          />
          <Icon
            src="/src/assets/icons8-linkedin.svg"
            link="https://www.linkedin.com/in/yasmin-s-59b967304/"
          />
          <Modal content=<MailForm />>
            <Icon src="/src/assets/envelope.svg" />
          </Modal>
        </div>
      </div>
    </>
  );
}
