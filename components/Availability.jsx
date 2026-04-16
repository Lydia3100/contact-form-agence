export default function Availability() {
  return (
    <div>
      <h2 className="text-[18px] font-bold uppercase mb-5">
        Disponibilités pour une visite
      </h2>

      <div className="flex flex-wrap items-center gap-3 mb-3">
        <select className="rounded-full bg-white/95 px-5 py-3 text-[16px] text-gray-700 outline-none">
          <option>Lundi</option>
        </select>

        <select className="rounded-full bg-white/95 px-5 py-3 text-[16px] text-gray-700 outline-none">
          <option>7h</option>
        </select>

        <select className="rounded-full bg-white/95 px-5 py-3 text-[16px] text-gray-700 outline-none">
          <option>0m</option>
        </select>

        <button className="rounded-full bg-[#6c00ff] px-6 py-3 text-[16px] font-bold uppercase text-white">
          Ajouter dispo
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex w-fit items-center gap-3 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-500">
          <span>Lundi à 9h45</span>
          <span className="text-lg leading-none">×</span>
        </div>

        <div className="flex w-fit items-center gap-3 rounded-full bg-white/85 px-4 py-2 text-sm text-gray-500">
          <span>Lundi à 9h45</span>
          <span className="text-lg leading-none">×</span>
        </div>
      </div>
    </div>
  );
}