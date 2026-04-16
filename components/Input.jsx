export default function Input({ type = "text", placeholder, name }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-full bg-white/95 px-5 py-3 text-[16px] text-gray-700 outline-none"
    />
  );
}