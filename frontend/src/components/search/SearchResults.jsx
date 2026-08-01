export default function SearchResults({
  results,
}) {
  return (
    <div className="space-y-3">
      {results.map((item) => (
        <div
          key={item._id}
          className="
            glass
            p-4
            rounded-xl
          "
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}