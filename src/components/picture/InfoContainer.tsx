export default function InfoContainer() {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-slate-100 p-4 md:h-full">
      <h1 className="font-bold">winter arc</h1>
      <p>nico is the goat of all things</p>
      <div>
        <h3>team:</h3>
        <ul className="list-inside list-disc">
          <li>stylist: nico sadia</li>
          <li>photographer: shayne felix</li>
          <li>model: don royees</li>
        </ul>
      </div>
    </div>
  );
}
