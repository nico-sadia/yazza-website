import Button from "./ui/Button";
import TextInput from "./ui/TextInput";

export default function MailForm() {
  return (
    <>
      <div className="flex flex-col gap-4 bg-slate-100 p-12 drop-shadow-lg">
        <h1 className="text-xl font-bold">contact me</h1>
        <div className="flex flex-row gap-8">
          <TextInput id="mail-first-name" label="first name" />
          <TextInput id="mail-last-name" label="last name" />
        </div>
        <TextInput id="mail-email" label="email" />
        <Button>submit</Button>
      </div>
    </>
  );
}
