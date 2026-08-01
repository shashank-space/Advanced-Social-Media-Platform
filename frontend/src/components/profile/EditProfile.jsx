import { useState } from "react";

export default function EditProfileModal() {
  const [name, setName] =
    useState("");

  const [bio, setBio] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      bio,
    });
  };

  return (
    <div className="glass rounded-2xl p-6 mt-4">

      <h2 className="text-xl font-bold mb-4">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg mb-3 text-black"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <textarea
          placeholder="Bio"
          className="w-full p-3 rounded-lg text-black"
          value={bio}
          onChange={(e) =>
            setBio(e.target.value)
          }
        />

        <button
          className="mt-4 bg-violet-600 px-4 py-2 rounded-lg"
        >
          Save
        </button>
      </form>

    </div>
  );
}