export default function InfoContainer() {
  return (
    <div className="flex h-full flex-col gap-6 bg-slate-100 p-4">
      <h1 className="font-bold">title</h1>
      <p>summary</p>
      <div>
        <h3>team:</h3>
        <ul className="list-inside list-disc">
          <li>stylist:</li>
          <li>photographer:</li>
          <li>model:</li>
        </ul>
      </div>
    </div>
  );
}
