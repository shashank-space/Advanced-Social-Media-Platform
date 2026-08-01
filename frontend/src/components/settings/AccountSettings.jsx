import { useState } from "react";

export default function AccountSettings() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Account Settings
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-900"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-slate-900"
        />

        <button
          className="
            bg-violet-600
            px-4
            py-2
            rounded-lg
          "
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}