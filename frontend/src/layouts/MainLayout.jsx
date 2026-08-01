import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import RightSidebar from "../components/layout/RightSidebar";

export default function MainLayout({
  children,
}) {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="flex max-w-7xl mx-auto">
        <Sidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}