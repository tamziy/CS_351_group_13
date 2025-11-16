"use client";

import { useState } from "react";
import { Search, MessageCircle, Bell, Settings } from "lucide-react";
import Link from "next/link";
import AuthButton from "./AuthButton";

export default function Navbar() {

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    if (val.length > 0){
      const res = await fetch(`http://127.0.0.1:5000/suggest?q=${encodeURIComponent(val)}`);
      const data = await res.json();
      setSuggestions(data.suggestions)
    }
    else{
      setSuggestions([]);
    }
  }

  return (
    <header className="relative flex items-center justify-between w-full h-16 bg-white border-b px-6">
      {/* Centered Search Bar */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3">
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <Search className="w-4 h-4 text-black-800 mr-2" />
          <input
            type="text"
            placeholder="Search"
            value={value}
            onChange={onChange}
            className="bg-transparent outline-none text-sm text-black w-full"
          />
          {suggestions.length > 0 && (
            <ul className="absolute top-10 left-0 bg-white border border-gray-200 rounded-md shadow w-full z-10">
              {suggestions.map((item) => {
                const classNumber = item.split(" ")[1];
                return (
                  <li key={item}>
                    <Link
                      href={`/classes/${classNumber}`}
                      className="block p-2 hover:bg-gray-100 cursor-pointer text-black"
                      onClick={()=> {
                        setValue("")
                        setSuggestions([])
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

        </div>
      </div>

      {/* sign in sign out */}
      <div className="flex items-center gap-6 ml-auto">
        <AuthButton />
      </div>
    </header>
  );
}
