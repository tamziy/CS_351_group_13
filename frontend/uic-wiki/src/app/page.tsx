"use client";
import Image from 'next/image';
import { useEffect, useState } from "react";
import testImg from './assets/images/testImg.png';
import classIcon from './assets/images/cs_4xx_icon.png';
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

  function TestImg() {
    return (
      <Image src={testImg} alt="Testing out this image" className="w-[50px] h-auto" />
    );
  }
  function ClassIcon() {
    return (
      <Image src={classIcon} alt="Testing out this image" className="w-[50px] h-auto" />
    );
  }

  return (

    <main className="bg-[#ffffff] items-center min-h-screen text-black">

      {/* <h1 className="text-2xl font-bold">{message}</h1> */}
      {/* <DefaultAccordion></DefaultAccordion> */}
      <div className="bg-[#c4c4c4] h-[100px]"></div>
      <hr className="text-black"></hr>
      <br></br>
      <br></br>
      <div className="grid grid-cols-[50%_20%] gap-6 justify-center h-screen">
        {/* <div className="bg-[#c4c4c4] p-4">
          <TestImg />
          <h2 className="text-4xl">UIC Class Wiki</h2>
          <h2 className="text-4xl">Computer Science</h2>
          <hr></hr>
          <h2 className="text-3xl">Home</h2>
          <h2 className="text-3xl">Professors</h2>
          <h2 className="text-3xl">Class Catalog</h2>
          <h2 className="text-3xl">Class Flowchart</h2>
        </div> */}
        <div className="p-4 rounded-2xl space-y-4">
          <h1 className="text-6xl">CS 4XX</h1>
          <br></br>
          <div className="flex flex-row gap-4">
          <ClassIcon />
          <h2 className="text-5xl">[Insert Title of Class]</h2>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <p className="text-2xl">Summary: </p>
            <p className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <h2 className="text-4xl">Comments</h2>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <h2 className="text-4xl">Professors</h2>
          </div>
          <div className="bg-[#faf9f9] p-4">
            <h2 className="text-4xl">Grade Distribution</h2>
          </div>
        </div>
        <div className="bg-[#c4c4c4] rounded-2xl p-4 text-center">
          {/* <select>
            <option value="Option 1">Red Pill</option>
            <option value="Option 2">Blue Pill</option>
          </select> */}
          <h2 className="text-4xl p-4">Credit Hours</h2>
          <p className="text-lg p-4">3 Undergrad, 4 Grad</p>
          <hr></hr>
          <h2 className="text-4xl p-4">Career Track</h2>
          <p className="text-lg p-4">Web Development, Software Engineering</p>
          <hr></hr>
          <h2 className="text-4xl p-4">Prerequisites</h2>
          <p className="text-lg p-4">CS 342</p>
          <hr></hr>
          <h2 className="text-4xl p-4">Resources</h2>
          <p className="text-lg text-black p-4">Past Syllabus, HTML5 Programming</p>
          <hr></hr>
          <h2 className="text-4xl text-black p-4">Rating</h2>
        </div>
      </div>

    </main>
  );
}
