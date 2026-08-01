import { useState } from "react";

export default function SearchBar({
  onSearch,
}) {
  const [query, setQuery] =
    useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setQuery(value);

    onSearch?.(value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search users, posts..."
      className="
        w-full
        p-3
        rounded-xl
        bg-slate-900
        border
        border-slate-700
      "
    />
  );
}