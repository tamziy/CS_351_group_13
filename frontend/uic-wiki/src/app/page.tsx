"use client";
import { useEffect, useState } from "react";
// import { DefaultAccordion } from "./Accordion";
// Import accordions

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/") // Flask route
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching:", err);
        setMessage("Failed to connect to backend");
      });
  }, []);

  return (
    <main className="bg-sky-50 flex items-center justify-center min-h-screen">
      
      {/* <h1 className="text-2xl font-bold">{message}</h1> */}
        {/* <DefaultAccordion></DefaultAccordion> */}
      <div className="bg-red-300 w-[20%] h-[400px] rounded-xl overflow-hidden">
        <h2>I mean, yeah!</h2>
        <h2 className="text-5xl text-black">UIC Class Wiki</h2>
        <h2 className="text-5xl text-black">Computer Science</h2>
        <h2 className="text-5xl text-black">Home</h2>
        <h2 className="text-5xl text-black">Professors</h2>
        <h2 className="text-5xl text-black">Class Catalog</h2>
        <h2 className="text-5xl text-black">Class Flowchart</h2>
      </div>
      <div className="bg-green-200 w-[50%]">
        <h2 className="text-5xl text-black">Class Name</h2>
        <h2 className="text-5xl text-black">Comments</h2>
        <h2 className="text-5xl text-black">Professor</h2>
        <h2 className="text-5xl text-black">Grade Distribution</h2>
      </div>
      <div className="bg-orange-200 w-[30%]">
        <select>
          <option value="Option 1">Red Pill</option>
          <option value="Option 2">Blue Pill</option>
        </select>
        <h2 className="text-5xl text-black">Credit Hours</h2>
        <h2 className="text-5xl text-black">Career Track</h2>
        <h2 className="text-5xl text-black">Prerequisites</h2>
        <h2 className="text-5xl text-black">Resources</h2>
        <h2 className="text-5xl text-black">Rating</h2>
      </div>

    </main>
  );
}
