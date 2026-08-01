export default function Avatar({
  src,
  alt = "avatar",
  size = "md",
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
  };

  return (
    <img
      src={
        src ||
        "https://via.placeholder.com/150"
      }
      alt={alt}
      className={`
        rounded-full
        object-cover
        ${sizes[size]}
      `}
    />
  );
}