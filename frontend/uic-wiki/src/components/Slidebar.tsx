"use client";

import { Home, BookOpen, LayoutDashboard, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen bg-white border-r p-6 text-black">
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
        <Link
          href="/"
          className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>

        <Link
          href="/professors"
          className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2"
        >
          <Users className="w-5 h-5" />
          <span>Professors</span>
        </Link>

        <Link
          href="/catalog"
          className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2"
        >
          <BookOpen className="w-5 h-5" />
          <span>Class Catalog</span>
        </Link>

        <Link
          href="/flowchart"
          className="flex items-center gap-3 hover:bg-gray-100 rounded-md p-2"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Class Flowchart</span>
        </Link>
      </nav>
    </aside>
  );
}
