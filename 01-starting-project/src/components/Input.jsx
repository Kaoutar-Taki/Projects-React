export default function Input({ label, invalid, ...props }) {
  return (
    <p>
      <label
        className={`block mb-2 text-xs font-bold tracking-wide uppercase ${
          invalid ? "text-red-400" : "text-gray-500"
        }`}
      >
        {label}
      </label>
      <input
        className={`w-full p-3 text-sm rounded-md shadow-sm ${
          invalid
            ? "bg-red-100 text-red-600 border-red-500"
            : "bg-gray-300 text-gray-700 border-transparent"
        }`}
        {...props}
      />
    </p>
  );
}

