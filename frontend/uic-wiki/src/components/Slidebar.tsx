"use client";

import { Home, BookOpen, LayoutDashboard, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    `flex items-center gap-3 rounded-md p-2 
     ${pathname === path ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"}`;

  return (
    <aside className="flex flex-col w-64 bg-white border-r border-gray-200 p-6 text-black">
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/uiclogo.svg"
          alt="UIC Logo"
          width={64}
          height={64}
          className="mb-2"
        />
        <h1 className="font-bold text-lg">UIC CLASS WIKI</h1>
        <p className="text-sm text-gray-500">Computer Science</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3">
        <Link href="/" className={linkClasses("/")}>
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link href="/professors" className={linkClasses("/professors")}>
          <Users className="w-5 h-5" />
          <span>Professors</span>
        </Link>

        <Link href="/flowchart" className={linkClasses("/flowchart")}>
          <LayoutDashboard className="w-5 h-5" />
          <span>Class Flowchart</span>
        </Link>
      </nav>
    </aside>
  );
}
