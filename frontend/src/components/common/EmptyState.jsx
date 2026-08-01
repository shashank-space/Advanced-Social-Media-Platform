export default function EmptyState({
  title,
  description,
}) {
  return (
    <div className="text-center py-10">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="text-gray-400 mt-2">
        {description}
      </p>
    </div>
  );
}