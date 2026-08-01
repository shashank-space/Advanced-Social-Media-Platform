export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-sm">
          {label}
        </label>
      )}

      <input
        className={`
          w-full
          px-4
          py-3
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          outline-none
          focus:border-violet-500
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}