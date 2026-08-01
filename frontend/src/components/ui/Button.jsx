export default function Button({
  children,
  className = ""
}) {

  return (

    <button
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        bg-gradient-to-r
        from-purple-600
        to-cyan-500
        hover:scale-105
        transition
        shadow-lg
        ${className}
      `}
    >

      {children}

    </button>

  );
}