import { Outlet } from "react-router-dom";
import { Navbar } from "@/app/layouts/Navbar";

export function AppLayout() {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}

