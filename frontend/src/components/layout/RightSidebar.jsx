export default function RightSidebar() {
  return (
    <aside className="hidden xl:block w-72 p-4">
      <div className="glass rounded-2xl p-4">
        <h3 className="font-bold text-lg mb-4">
          Trending
        </h3>

        <ul className="space-y-3">
          <li>#React</li>
          <li>#MERN</li>
          <li>#JavaScript</li>
          <li>#WebDevelopment</li>
        </ul>
      </div>
    </aside>
  );
}