export default function RadioGroup({ name, options = [] }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-[16px]">
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            className="h-4 w-4 accent-white"
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}