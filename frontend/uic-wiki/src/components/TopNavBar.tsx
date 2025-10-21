"use client";

import { Search, MessageCircle, Bell, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative flex items-center justify-between w-full h-16 bg-white border-b px-6">
      {/* Centered Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-black w-full"
          />
        </div>
      </div>

      {/* Icons on the right */}
      <div className="flex items-center gap-6 text-gray-700 ml-auto">
        <MessageCircle className="w-5 h-5 cursor-pointer hover:text-black" />
        <Bell className="w-5 h-5 cursor-pointer hover:text-black" />
        <Settings className="w-5 h-5 cursor-pointer hover:text-black" />
      </div>
    </header>
  );
}
